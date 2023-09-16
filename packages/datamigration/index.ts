import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatabaseMigrationsSqlDbArgs } from "./databaseMigrationsSqlDb";
export type DatabaseMigrationsSqlDb = import("./databaseMigrationsSqlDb").DatabaseMigrationsSqlDb;
export const DatabaseMigrationsSqlDb: typeof import("./databaseMigrationsSqlDb").DatabaseMigrationsSqlDb = null as any;
utilities.lazyLoad(exports, ["DatabaseMigrationsSqlDb"], () => require("./databaseMigrationsSqlDb"));

export { FileArgs } from "./file";
export type File = import("./file").File;
export const File: typeof import("./file").File = null as any;
utilities.lazyLoad(exports, ["File"], () => require("./file"));

export { GetDatabaseMigrationsSqlDbArgs, GetDatabaseMigrationsSqlDbResult, GetDatabaseMigrationsSqlDbOutputArgs } from "./getDatabaseMigrationsSqlDb";
export const getDatabaseMigrationsSqlDb: typeof import("./getDatabaseMigrationsSqlDb").getDatabaseMigrationsSqlDb = null as any;
export const getDatabaseMigrationsSqlDbOutput: typeof import("./getDatabaseMigrationsSqlDb").getDatabaseMigrationsSqlDbOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseMigrationsSqlDb","getDatabaseMigrationsSqlDbOutput"], () => require("./getDatabaseMigrationsSqlDb"));

export { GetFileArgs, GetFileResult, GetFileOutputArgs } from "./getFile";
export const getFile: typeof import("./getFile").getFile = null as any;
export const getFileOutput: typeof import("./getFile").getFileOutput = null as any;
utilities.lazyLoad(exports, ["getFile","getFileOutput"], () => require("./getFile"));

export { GetProjectArgs, GetProjectResult, GetProjectOutputArgs } from "./getProject";
export const getProject: typeof import("./getProject").getProject = null as any;
export const getProjectOutput: typeof import("./getProject").getProjectOutput = null as any;
utilities.lazyLoad(exports, ["getProject","getProjectOutput"], () => require("./getProject"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetServiceTaskArgs, GetServiceTaskResult, GetServiceTaskOutputArgs } from "./getServiceTask";
export const getServiceTask: typeof import("./getServiceTask").getServiceTask = null as any;
export const getServiceTaskOutput: typeof import("./getServiceTask").getServiceTaskOutput = null as any;
utilities.lazyLoad(exports, ["getServiceTask","getServiceTaskOutput"], () => require("./getServiceTask"));

export { GetSqlMigrationServiceArgs, GetSqlMigrationServiceResult, GetSqlMigrationServiceOutputArgs } from "./getSqlMigrationService";
export const getSqlMigrationService: typeof import("./getSqlMigrationService").getSqlMigrationService = null as any;
export const getSqlMigrationServiceOutput: typeof import("./getSqlMigrationService").getSqlMigrationServiceOutput = null as any;
utilities.lazyLoad(exports, ["getSqlMigrationService","getSqlMigrationServiceOutput"], () => require("./getSqlMigrationService"));

export { GetTaskArgs, GetTaskResult, GetTaskOutputArgs } from "./getTask";
export const getTask: typeof import("./getTask").getTask = null as any;
export const getTaskOutput: typeof import("./getTask").getTaskOutput = null as any;
utilities.lazyLoad(exports, ["getTask","getTaskOutput"], () => require("./getTask"));

export { ListSqlMigrationServiceAuthKeysArgs, ListSqlMigrationServiceAuthKeysResult, ListSqlMigrationServiceAuthKeysOutputArgs } from "./listSqlMigrationServiceAuthKeys";
export const listSqlMigrationServiceAuthKeys: typeof import("./listSqlMigrationServiceAuthKeys").listSqlMigrationServiceAuthKeys = null as any;
export const listSqlMigrationServiceAuthKeysOutput: typeof import("./listSqlMigrationServiceAuthKeys").listSqlMigrationServiceAuthKeysOutput = null as any;
utilities.lazyLoad(exports, ["listSqlMigrationServiceAuthKeys","listSqlMigrationServiceAuthKeysOutput"], () => require("./listSqlMigrationServiceAuthKeys"));

export { ListSqlMigrationServiceMonitoringDataArgs, ListSqlMigrationServiceMonitoringDataResult, ListSqlMigrationServiceMonitoringDataOutputArgs } from "./listSqlMigrationServiceMonitoringData";
export const listSqlMigrationServiceMonitoringData: typeof import("./listSqlMigrationServiceMonitoringData").listSqlMigrationServiceMonitoringData = null as any;
export const listSqlMigrationServiceMonitoringDataOutput: typeof import("./listSqlMigrationServiceMonitoringData").listSqlMigrationServiceMonitoringDataOutput = null as any;
utilities.lazyLoad(exports, ["listSqlMigrationServiceMonitoringData","listSqlMigrationServiceMonitoringDataOutput"], () => require("./listSqlMigrationServiceMonitoringData"));

export { ProjectArgs } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { ServiceTaskArgs } from "./serviceTask";
export type ServiceTask = import("./serviceTask").ServiceTask;
export const ServiceTask: typeof import("./serviceTask").ServiceTask = null as any;
utilities.lazyLoad(exports, ["ServiceTask"], () => require("./serviceTask"));

export { SqlMigrationServiceArgs } from "./sqlMigrationService";
export type SqlMigrationService = import("./sqlMigrationService").SqlMigrationService;
export const SqlMigrationService: typeof import("./sqlMigrationService").SqlMigrationService = null as any;
utilities.lazyLoad(exports, ["SqlMigrationService"], () => require("./sqlMigrationService"));

export { TaskArgs } from "./task";
export type Task = import("./task").Task;
export const Task: typeof import("./task").Task = null as any;
utilities.lazyLoad(exports, ["Task"], () => require("./task"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20210630 from "./v20210630";
import * as v20211030preview from "./v20211030preview";
import * as v20220330preview from "./v20220330preview";

export {
    v20210630,
    v20211030preview,
    v20220330preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datamigration:DatabaseMigrationsSqlDb":
                return new DatabaseMigrationsSqlDb(name, <any>undefined, { urn })
            case "azure-native:datamigration:File":
                return new File(name, <any>undefined, { urn })
            case "azure-native:datamigration:Project":
                return new Project(name, <any>undefined, { urn })
            case "azure-native:datamigration:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:datamigration:ServiceTask":
                return new ServiceTask(name, <any>undefined, { urn })
            case "azure-native:datamigration:SqlMigrationService":
                return new SqlMigrationService(name, <any>undefined, { urn })
            case "azure-native:datamigration:Task":
                return new Task(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datamigration", _module)
