import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSerialPortArgs, GetSerialPortResult, GetSerialPortOutputArgs } from "./getSerialPort";
export const getSerialPort: typeof import("./getSerialPort").getSerialPort = null as any;
export const getSerialPortOutput: typeof import("./getSerialPort").getSerialPortOutput = null as any;
utilities.lazyLoad(exports, ["getSerialPort","getSerialPortOutput"], () => require("./getSerialPort"));

export { SerialPortArgs } from "./serialPort";
export type SerialPort = import("./serialPort").SerialPort;
export const SerialPort: typeof import("./serialPort").SerialPort = null as any;
utilities.lazyLoad(exports, ["SerialPort"], () => require("./serialPort"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:serialconsole:SerialPort":
                return new SerialPort(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "serialconsole", _module)