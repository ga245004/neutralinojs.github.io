---
title: Extensions Overview
---

The Neutralino framework provides a native API that allows users to perform various operating system-level operations such as accessing the filesystem, executing commands, and showing dialog boxes. While users may require additional native APIs like database connectors for building their applications, adding all of them to the core would make the framework bloated. Therefore, the framework offers a WebSocket-based extension system that enables users to extend the Neutralinojs API without having to build the framework from source.

The extensions API provides the flexibility to write custom backend code for your application using any programming language. Furthermore, the extensions API allows you to include the Neutralinojs process as a part of any source file.

## Defining the extensions

First, you need to define extensions you use in `neutralinojs.config.json` with the following structure.

```json
"extensions": [
    {
        "id": "js.neutralino.sampleextension",
        "commandLinux": "${NL_PATH}/extensions/binary/linux/ext_bin",
        "commandDarwin": "${NL_PATH}/extensions/binary/mac/ext_bin",
        "commandWindows": "${NL_PATH}/extensions/binary/win/ext_bin.exe"
    },
    {
        "id": "js.neutralino.binaryextension",
        "command": "node ${NL_PATH}/extensions/binary/main.js",
    }
]
```

- `id` String: A unique key to identify each extension. This id cannot contain any characters except for letters, numbers, and periods.
- `command` String (optional): A cross-platform command to start the extension. Eg: `node ${NL_PATH}/extensions/binary/main.js`
  will work on every platform.
- `commandLinux` String (optional): Extension startup command for Linux.
- `commandDarwin` String (optional): Extension startup command for macOS.
- `commandWindows` String (optional): Extension startup command for Windows.

## Enable the extensions feature

The extensions API is disabled by default. Enable extensions by adding the following setting to your app config.

```json
"enableExtensions": true
```

## Connecting an extension with Neutralinojs

As you already noticed, an extension is just a separate process. Neutralinojs starts spawning extension instances
during the framework bootstrap process and initiates each extension process with the following process arguments.

- `--nl-port=<port>`: port of the Neutralinojs server.
- `--nl-token=<token>`: Access token to use the native API.
- `--nl-extension-id=<id>`: Extension identifier.

Now, you can connect with the Neutralinojs server with the above process arguments. Use the following WebSocket
URL to initiate a new WebSocket connection.

```
ws://localhost:{port}?extensionId={extensionId}
```

## Sending a message from app to an extension

The extensions API uses an event-based messaging protocol. Every message uses the following JSON structure.

```json
{
  "event": "<event_name>",
  "data": {}
}
```

Use the built-in extensions API to send a message to any extension, as shown below.

```js
let extension = 'js.neutralino.sampleextension';
let event = 'helloExtension';
let data = {
  testValue: 10,
};

await Neutralino.extensions.dispatch(extension, event, data);
```

The above code snippet sends a message to the `js.neutralino.sampleextension` extension instance. You can send
messages to extensions with the `dispatch` function anytime. If you send a message before the extension connects
with the main process, the Neutralinojs client library queues and sends it when the target extension's connection is
established. In other words, you don't need to worry about extensions' status when you send messages to
extensions.

## Sending a message from the extension to app

When you connect your extensions with the Neutralinojs main process, you can call the native API by sending
WebSocket messages to the Neutralinojs process directly. Neutralinojs server processes messages based on the
following format.

```json
{
  "id": "<id>",
  "method": "<method>",
  "accessToken": "<token>",
  "data": {}
}
```

- `id` String: A [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) v4 string.
- `method` String: Native method name. Eg: `window.setTitle`.
- `accessToken` String: Access token generated by the Neutralinojs server.
- `data` Object (optional): Parameters for the native method.

You can invoke the `app.broadcast` native method to send messages to all app instances. Register a callback
with the `events.on` in the application code to receive the message send by the extension process.

## Terminating an extension instance

When Neutralino exits, it does not send kill signals to all extension instances. Therefore, it is necessary to stop the extension process when the WebSocket-based IPC (Inter-Process Communication) closes. The following Node.js extension code shows how to do this:

```js
const WS = require("websocket").w3cwebsocket;
const { v4: uuidv4 } = require("uuid");
const chalk = require("chalk");

const { nl_port, nl_token, nl_extension_id } = require("minimist")(
  process.argv.slice(2)
);

const client = new WS(
  `ws://localhost:${nl_port}?extensionId=${nl_extension_id}`
);

client.onerror = () => log("Connection error!", "ERROR");
client.onopen = () => log("Connected");
client.onclose = () => process.exit();

client.onmessage = (e) => {
  const { event, data } = JSON.parse(e.data);

  if (event === "eventToExtension") {
    log(data);

    client.send(
      JSON.stringify({
        id: uuidv4(),
        method: "app.broadcast",
        accessToken: nl_token,
        data: { event: "eventFromExtension", data: "Hello app!" },
      })
    );
  }
};

function log(message, type = "INFO") {
  const logLine = `[${nl_extension_id}]: ${chalk[
    type === "INFO" ? "green" : "red"
  ](type)} ${message}`;
  console[type === "INFO" ? "log" : "error"](logLine);
}
```

This code is a sample Node.js extension for Neutralinojs, which establishes a WebSocket connection to the Neutralinojs server and handles incoming messages from the server. It also sends a message to the server using the client.send method when it receives a specific event from the server.

For more information on how to terminate an existing instance, you can refer to the sample-extension.
https://github.com/neutralinojs/neutralinojs/tree/main/bin/extensions/sampleextension

## Using Neutralinojs from your source files

The above approach helps you to extend Neutralinojs API with a custom backend code. Neutralinojs process can
spawn multiple extensions as child processes and communicate with the internal messaging protocol. On the other
hand, you can spawn Neutralinojs processes from your own processes and communicate with the same messaging
protocol. Using this approach, it's possible to write Neutralinojs apps with any backend language.

You can obtain authentication details for the Neutralinojs process by setting your config as below.

```json
"exportAuthInfo": true
```

The above setting exports authentication details to `${NL_PATH}/.tmp/auth_info.json` with the following format.

```json
{
  "port": "<port>",
  "accessToken": "<token>"
}
```

Connect with the Neutralinojs process by using the extension API as usual.
