import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DataProductArgs } from "./dataProduct";
export type DataProduct = import("./dataProduct").DataProduct;
export const DataProduct: typeof import("./dataProduct").DataProduct = null as any;
utilities.lazyLoad(exports, ["DataProduct"], () => require("./dataProduct"));

export { DataTypeArgs } from "./dataType";
export type DataType = import("./dataType").DataType;
export const DataType: typeof import("./dataType").DataType = null as any;
utilities.lazyLoad(exports, ["DataType"], () => require("./dataType"));

export { GetDataProductArgs, GetDataProductResult, GetDataProductOutputArgs } from "./getDataProduct";
export const getDataProduct: typeof import("./getDataProduct").getDataProduct = null as any;
export const getDataProductOutput: typeof import("./getDataProduct").getDataProductOutput = null as any;
utilities.lazyLoad(exports, ["getDataProduct","getDataProductOutput"], () => require("./getDataProduct"));

export { GetDataTypeArgs, GetDataTypeResult, GetDataTypeOutputArgs } from "./getDataType";
export const getDataType: typeof import("./getDataType").getDataType = null as any;
export const getDataTypeOutput: typeof import("./getDataType").getDataTypeOutput = null as any;
utilities.lazyLoad(exports, ["getDataType","getDataTypeOutput"], () => require("./getDataType"));

export { ListDataProductRolesAssignmentsArgs, ListDataProductRolesAssignmentsResult, ListDataProductRolesAssignmentsOutputArgs } from "./listDataProductRolesAssignments";
export const listDataProductRolesAssignments: typeof import("./listDataProductRolesAssignments").listDataProductRolesAssignments = null as any;
export const listDataProductRolesAssignmentsOutput: typeof import("./listDataProductRolesAssignments").listDataProductRolesAssignmentsOutput = null as any;
utilities.lazyLoad(exports, ["listDataProductRolesAssignments","listDataProductRolesAssignmentsOutput"], () => require("./listDataProductRolesAssignments"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20231115 from "./v20231115";

export {
    v20231115,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:networkanalytics:DataProduct":
                return new DataProduct(name, <any>undefined, { urn })
            case "azure-native:networkanalytics:DataType":
                return new DataType(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "networkanalytics", _module)