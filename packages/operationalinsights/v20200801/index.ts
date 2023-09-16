import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { DataExportArgs } from "./dataExport";
export type DataExport = import("./dataExport").DataExport;
export const DataExport: typeof import("./dataExport").DataExport = null as any;
utilities.lazyLoad(exports, ["DataExport"], () => require("./dataExport"));

export { DataSourceArgs } from "./dataSource";
export type DataSource = import("./dataSource").DataSource;
export const DataSource: typeof import("./dataSource").DataSource = null as any;
utilities.lazyLoad(exports, ["DataSource"], () => require("./dataSource"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetDataExportArgs, GetDataExportResult, GetDataExportOutputArgs } from "./getDataExport";
export const getDataExport: typeof import("./getDataExport").getDataExport = null as any;
export const getDataExportOutput: typeof import("./getDataExport").getDataExportOutput = null as any;
utilities.lazyLoad(exports, ["getDataExport","getDataExportOutput"], () => require("./getDataExport"));

export { GetDataSourceArgs, GetDataSourceResult, GetDataSourceOutputArgs } from "./getDataSource";
export const getDataSource: typeof import("./getDataSource").getDataSource = null as any;
export const getDataSourceOutput: typeof import("./getDataSource").getDataSourceOutput = null as any;
utilities.lazyLoad(exports, ["getDataSource","getDataSourceOutput"], () => require("./getDataSource"));

export { GetLinkedServiceArgs, GetLinkedServiceResult, GetLinkedServiceOutputArgs } from "./getLinkedService";
export const getLinkedService: typeof import("./getLinkedService").getLinkedService = null as any;
export const getLinkedServiceOutput: typeof import("./getLinkedService").getLinkedServiceOutput = null as any;
utilities.lazyLoad(exports, ["getLinkedService","getLinkedServiceOutput"], () => require("./getLinkedService"));

export { GetLinkedStorageAccountArgs, GetLinkedStorageAccountResult, GetLinkedStorageAccountOutputArgs } from "./getLinkedStorageAccount";
export const getLinkedStorageAccount: typeof import("./getLinkedStorageAccount").getLinkedStorageAccount = null as any;
export const getLinkedStorageAccountOutput: typeof import("./getLinkedStorageAccount").getLinkedStorageAccountOutput = null as any;
utilities.lazyLoad(exports, ["getLinkedStorageAccount","getLinkedStorageAccountOutput"], () => require("./getLinkedStorageAccount"));

export { GetSavedSearchArgs, GetSavedSearchResult, GetSavedSearchOutputArgs } from "./getSavedSearch";
export const getSavedSearch: typeof import("./getSavedSearch").getSavedSearch = null as any;
export const getSavedSearchOutput: typeof import("./getSavedSearch").getSavedSearchOutput = null as any;
utilities.lazyLoad(exports, ["getSavedSearch","getSavedSearchOutput"], () => require("./getSavedSearch"));

export { GetSharedKeysArgs, GetSharedKeysResult, GetSharedKeysOutputArgs } from "./getSharedKeys";
export const getSharedKeys: typeof import("./getSharedKeys").getSharedKeys = null as any;
export const getSharedKeysOutput: typeof import("./getSharedKeys").getSharedKeysOutput = null as any;
utilities.lazyLoad(exports, ["getSharedKeys","getSharedKeysOutput"], () => require("./getSharedKeys"));

export { GetStorageInsightConfigArgs, GetStorageInsightConfigResult, GetStorageInsightConfigOutputArgs } from "./getStorageInsightConfig";
export const getStorageInsightConfig: typeof import("./getStorageInsightConfig").getStorageInsightConfig = null as any;
export const getStorageInsightConfigOutput: typeof import("./getStorageInsightConfig").getStorageInsightConfigOutput = null as any;
utilities.lazyLoad(exports, ["getStorageInsightConfig","getStorageInsightConfigOutput"], () => require("./getStorageInsightConfig"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { LinkedServiceArgs } from "./linkedService";
export type LinkedService = import("./linkedService").LinkedService;
export const LinkedService: typeof import("./linkedService").LinkedService = null as any;
utilities.lazyLoad(exports, ["LinkedService"], () => require("./linkedService"));

export { LinkedStorageAccountArgs } from "./linkedStorageAccount";
export type LinkedStorageAccount = import("./linkedStorageAccount").LinkedStorageAccount;
export const LinkedStorageAccount: typeof import("./linkedStorageAccount").LinkedStorageAccount = null as any;
utilities.lazyLoad(exports, ["LinkedStorageAccount"], () => require("./linkedStorageAccount"));

export { SavedSearchArgs } from "./savedSearch";
export type SavedSearch = import("./savedSearch").SavedSearch;
export const SavedSearch: typeof import("./savedSearch").SavedSearch = null as any;
utilities.lazyLoad(exports, ["SavedSearch"], () => require("./savedSearch"));

export { StorageInsightConfigArgs } from "./storageInsightConfig";
export type StorageInsightConfig = import("./storageInsightConfig").StorageInsightConfig;
export const StorageInsightConfig: typeof import("./storageInsightConfig").StorageInsightConfig = null as any;
utilities.lazyLoad(exports, ["StorageInsightConfig"], () => require("./storageInsightConfig"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "../types/enums/v20200801";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:operationalinsights/v20200801:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20200801:DataExport":
                return new DataExport(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20200801:DataSource":
                return new DataSource(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20200801:LinkedService":
                return new LinkedService(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20200801:LinkedStorageAccount":
                return new LinkedStorageAccount(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20200801:SavedSearch":
                return new SavedSearch(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20200801:StorageInsightConfig":
                return new StorageInsightConfig(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20200801:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "operationalinsights/v20200801", _module)
