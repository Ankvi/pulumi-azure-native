import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActiveDirectoryConnectorArgs } from "./activeDirectoryConnector";
export type ActiveDirectoryConnector = import("./activeDirectoryConnector").ActiveDirectoryConnector;
export const ActiveDirectoryConnector: typeof import("./activeDirectoryConnector").ActiveDirectoryConnector = null as any;
utilities.lazyLoad(exports, ["ActiveDirectoryConnector"], () => require("./activeDirectoryConnector"));

export { DataControllerArgs } from "./dataController";
export type DataController = import("./dataController").DataController;
export const DataController: typeof import("./dataController").DataController = null as any;
utilities.lazyLoad(exports, ["DataController"], () => require("./dataController"));

export { FailoverGroupArgs } from "./failoverGroup";
export type FailoverGroup = import("./failoverGroup").FailoverGroup;
export const FailoverGroup: typeof import("./failoverGroup").FailoverGroup = null as any;
utilities.lazyLoad(exports, ["FailoverGroup"], () => require("./failoverGroup"));

export { GetActiveDirectoryConnectorArgs, GetActiveDirectoryConnectorResult, GetActiveDirectoryConnectorOutputArgs } from "./getActiveDirectoryConnector";
export const getActiveDirectoryConnector: typeof import("./getActiveDirectoryConnector").getActiveDirectoryConnector = null as any;
export const getActiveDirectoryConnectorOutput: typeof import("./getActiveDirectoryConnector").getActiveDirectoryConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getActiveDirectoryConnector","getActiveDirectoryConnectorOutput"], () => require("./getActiveDirectoryConnector"));

export { GetDataControllerArgs, GetDataControllerResult, GetDataControllerOutputArgs } from "./getDataController";
export const getDataController: typeof import("./getDataController").getDataController = null as any;
export const getDataControllerOutput: typeof import("./getDataController").getDataControllerOutput = null as any;
utilities.lazyLoad(exports, ["getDataController","getDataControllerOutput"], () => require("./getDataController"));

export { GetFailoverGroupArgs, GetFailoverGroupResult, GetFailoverGroupOutputArgs } from "./getFailoverGroup";
export const getFailoverGroup: typeof import("./getFailoverGroup").getFailoverGroup = null as any;
export const getFailoverGroupOutput: typeof import("./getFailoverGroup").getFailoverGroupOutput = null as any;
utilities.lazyLoad(exports, ["getFailoverGroup","getFailoverGroupOutput"], () => require("./getFailoverGroup"));

export { GetPostgresInstanceArgs, GetPostgresInstanceResult, GetPostgresInstanceOutputArgs } from "./getPostgresInstance";
export const getPostgresInstance: typeof import("./getPostgresInstance").getPostgresInstance = null as any;
export const getPostgresInstanceOutput: typeof import("./getPostgresInstance").getPostgresInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getPostgresInstance","getPostgresInstanceOutput"], () => require("./getPostgresInstance"));

export { GetSqlManagedInstanceArgs, GetSqlManagedInstanceResult, GetSqlManagedInstanceOutputArgs } from "./getSqlManagedInstance";
export const getSqlManagedInstance: typeof import("./getSqlManagedInstance").getSqlManagedInstance = null as any;
export const getSqlManagedInstanceOutput: typeof import("./getSqlManagedInstance").getSqlManagedInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSqlManagedInstance","getSqlManagedInstanceOutput"], () => require("./getSqlManagedInstance"));

export { GetSqlServerAvailabilityGroupArgs, GetSqlServerAvailabilityGroupResult, GetSqlServerAvailabilityGroupOutputArgs } from "./getSqlServerAvailabilityGroup";
export const getSqlServerAvailabilityGroup: typeof import("./getSqlServerAvailabilityGroup").getSqlServerAvailabilityGroup = null as any;
export const getSqlServerAvailabilityGroupOutput: typeof import("./getSqlServerAvailabilityGroup").getSqlServerAvailabilityGroupOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerAvailabilityGroup","getSqlServerAvailabilityGroupOutput"], () => require("./getSqlServerAvailabilityGroup"));

export { GetSqlServerAvailabilityGroupDetailViewArgs, GetSqlServerAvailabilityGroupDetailViewResult, GetSqlServerAvailabilityGroupDetailViewOutputArgs } from "./getSqlServerAvailabilityGroupDetailView";
export const getSqlServerAvailabilityGroupDetailView: typeof import("./getSqlServerAvailabilityGroupDetailView").getSqlServerAvailabilityGroupDetailView = null as any;
export const getSqlServerAvailabilityGroupDetailViewOutput: typeof import("./getSqlServerAvailabilityGroupDetailView").getSqlServerAvailabilityGroupDetailViewOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerAvailabilityGroupDetailView","getSqlServerAvailabilityGroupDetailViewOutput"], () => require("./getSqlServerAvailabilityGroupDetailView"));

export { GetSqlServerDatabaseArgs, GetSqlServerDatabaseResult, GetSqlServerDatabaseOutputArgs } from "./getSqlServerDatabase";
export const getSqlServerDatabase: typeof import("./getSqlServerDatabase").getSqlServerDatabase = null as any;
export const getSqlServerDatabaseOutput: typeof import("./getSqlServerDatabase").getSqlServerDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerDatabase","getSqlServerDatabaseOutput"], () => require("./getSqlServerDatabase"));

export { GetSqlServerEsuLicenseArgs, GetSqlServerEsuLicenseResult, GetSqlServerEsuLicenseOutputArgs } from "./getSqlServerEsuLicense";
export const getSqlServerEsuLicense: typeof import("./getSqlServerEsuLicense").getSqlServerEsuLicense = null as any;
export const getSqlServerEsuLicenseOutput: typeof import("./getSqlServerEsuLicense").getSqlServerEsuLicenseOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerEsuLicense","getSqlServerEsuLicenseOutput"], () => require("./getSqlServerEsuLicense"));

export { GetSqlServerInstanceArgs, GetSqlServerInstanceResult, GetSqlServerInstanceOutputArgs } from "./getSqlServerInstance";
export const getSqlServerInstance: typeof import("./getSqlServerInstance").getSqlServerInstance = null as any;
export const getSqlServerInstanceOutput: typeof import("./getSqlServerInstance").getSqlServerInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerInstance","getSqlServerInstanceOutput"], () => require("./getSqlServerInstance"));

export { GetSqlServerInstanceJobsStatusArgs, GetSqlServerInstanceJobsStatusResult, GetSqlServerInstanceJobsStatusOutputArgs } from "./getSqlServerInstanceJobsStatus";
export const getSqlServerInstanceJobsStatus: typeof import("./getSqlServerInstanceJobsStatus").getSqlServerInstanceJobsStatus = null as any;
export const getSqlServerInstanceJobsStatusOutput: typeof import("./getSqlServerInstanceJobsStatus").getSqlServerInstanceJobsStatusOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerInstanceJobsStatus","getSqlServerInstanceJobsStatusOutput"], () => require("./getSqlServerInstanceJobsStatus"));

export { GetSqlServerInstanceTelemetryArgs, GetSqlServerInstanceTelemetryResult, GetSqlServerInstanceTelemetryOutputArgs } from "./getSqlServerInstanceTelemetry";
export const getSqlServerInstanceTelemetry: typeof import("./getSqlServerInstanceTelemetry").getSqlServerInstanceTelemetry = null as any;
export const getSqlServerInstanceTelemetryOutput: typeof import("./getSqlServerInstanceTelemetry").getSqlServerInstanceTelemetryOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerInstanceTelemetry","getSqlServerInstanceTelemetryOutput"], () => require("./getSqlServerInstanceTelemetry"));

export { GetSqlServerLicenseArgs, GetSqlServerLicenseResult, GetSqlServerLicenseOutputArgs } from "./getSqlServerLicense";
export const getSqlServerLicense: typeof import("./getSqlServerLicense").getSqlServerLicense = null as any;
export const getSqlServerLicenseOutput: typeof import("./getSqlServerLicense").getSqlServerLicenseOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerLicense","getSqlServerLicenseOutput"], () => require("./getSqlServerLicense"));

export { PostgresInstanceArgs } from "./postgresInstance";
export type PostgresInstance = import("./postgresInstance").PostgresInstance;
export const PostgresInstance: typeof import("./postgresInstance").PostgresInstance = null as any;
utilities.lazyLoad(exports, ["PostgresInstance"], () => require("./postgresInstance"));

export { SqlManagedInstanceArgs } from "./sqlManagedInstance";
export type SqlManagedInstance = import("./sqlManagedInstance").SqlManagedInstance;
export const SqlManagedInstance: typeof import("./sqlManagedInstance").SqlManagedInstance = null as any;
utilities.lazyLoad(exports, ["SqlManagedInstance"], () => require("./sqlManagedInstance"));

export { SqlServerAvailabilityGroupArgs } from "./sqlServerAvailabilityGroup";
export type SqlServerAvailabilityGroup = import("./sqlServerAvailabilityGroup").SqlServerAvailabilityGroup;
export const SqlServerAvailabilityGroup: typeof import("./sqlServerAvailabilityGroup").SqlServerAvailabilityGroup = null as any;
utilities.lazyLoad(exports, ["SqlServerAvailabilityGroup"], () => require("./sqlServerAvailabilityGroup"));

export { SqlServerDatabaseArgs } from "./sqlServerDatabase";
export type SqlServerDatabase = import("./sqlServerDatabase").SqlServerDatabase;
export const SqlServerDatabase: typeof import("./sqlServerDatabase").SqlServerDatabase = null as any;
utilities.lazyLoad(exports, ["SqlServerDatabase"], () => require("./sqlServerDatabase"));

export { SqlServerEsuLicenseArgs } from "./sqlServerEsuLicense";
export type SqlServerEsuLicense = import("./sqlServerEsuLicense").SqlServerEsuLicense;
export const SqlServerEsuLicense: typeof import("./sqlServerEsuLicense").SqlServerEsuLicense = null as any;
utilities.lazyLoad(exports, ["SqlServerEsuLicense"], () => require("./sqlServerEsuLicense"));

export { SqlServerInstanceArgs } from "./sqlServerInstance";
export type SqlServerInstance = import("./sqlServerInstance").SqlServerInstance;
export const SqlServerInstance: typeof import("./sqlServerInstance").SqlServerInstance = null as any;
utilities.lazyLoad(exports, ["SqlServerInstance"], () => require("./sqlServerInstance"));

export { SqlServerLicenseArgs } from "./sqlServerLicense";
export type SqlServerLicense = import("./sqlServerLicense").SqlServerLicense;
export const SqlServerLicense: typeof import("./sqlServerLicense").SqlServerLicense = null as any;
utilities.lazyLoad(exports, ["SqlServerLicense"], () => require("./sqlServerLicense"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azurearcdata:ActiveDirectoryConnector":
                return new ActiveDirectoryConnector(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:DataController":
                return new DataController(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:FailoverGroup":
                return new FailoverGroup(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:PostgresInstance":
                return new PostgresInstance(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:SqlManagedInstance":
                return new SqlManagedInstance(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:SqlServerAvailabilityGroup":
                return new SqlServerAvailabilityGroup(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:SqlServerDatabase":
                return new SqlServerDatabase(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:SqlServerEsuLicense":
                return new SqlServerEsuLicense(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:SqlServerInstance":
                return new SqlServerInstance(name, <any>undefined, { urn })
            case "azure-native:azurearcdata:SqlServerLicense":
                return new SqlServerLicense(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurearcdata", _module)