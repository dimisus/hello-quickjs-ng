// 1. Import a QuickJS module constructor function from quickjs-emscripten-core
import { newQuickJSWASMModuleFromVariant } from "quickjs-emscripten-core";
// 2. Import a variant suitable for your use case. For example, if you only care to
//    target with the fastest execution speed, import the release build variant
import releaseVariant from "@jitl/quickjs-ng-wasmfile-debug-sync";
// 3. Create the "QuickJS" module that presents the quickjs-emscripten API.
//    Export and use in other files, or consume directly.
// @ts-ignore
const QuickJS = await newQuickJSWASMModuleFromVariant(releaseVariant);
console.log(QuickJS.evalCode("1+2"));
