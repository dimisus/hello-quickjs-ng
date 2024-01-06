// 1. Import a QuickJS module constructor function from quickjs-emscripten-core
import { newQuickJSWASMModuleFromVariant, } from "quickjs-emscripten-core";
// 2. Import a variant suitable for your use case. For example, if you only care to
//    target with the fastest execution speed, import the release build variant
import releaseVariant from "@jitl/quickjs-ng-wasmfile-release-sync";
// 3. Create the "QuickJS" module that presents the quickjs-emscripten API.
//    Export and use in other files, or consume directly.
const QuickJS = await newQuickJSWASMModuleFromVariant(releaseVariant);
// 4. Use the QuickJS module as you would in a Node.js environment.
const moduleMock = () => {
    const someText = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33];
    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array(someText));
};
console.log(QuickJS.evalCode(`100 + 100`));
console.log(QuickJS.evalCode(`BigInt(10000000000000000000000)`));
console.log(QuickJS.evalCode(`const module = ${moduleMock.toString()}; module();`));
