import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the error.
 */
export interface ErrorResponse {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error ID.
     */
    id?: number;
    /**
     * The detailed error message.
     */
    message?: string;
    /**
     * The error possible causes.
     */
    possibleCauses?: string;
    /**
     * The error recommended action
     */
    recommendedAction?: string;
    /**
     * The account ID used to login.
     */
    runAsAccountId?: string;
    /**
     * The error severity
     */
    severity?: string;
    /**
     * The summarized error message.
     */
    summaryMessage?: string;
    /**
     * Time when this error was last updated.
     */
    updatedTimeStamp?: string;
}

/**
 * The springbootapps resource definition.
 */
export interface SpringbootappsPropertiesResponse {
    /**
     * The name of SpringBootApp.
     */
    appName?: string;
    /**
     * The application port.
     */
    appPort?: number;
    /**
     * The application type, whether it is a SpringBoot app.
     */
    appType?: string;
    /**
     * The application configuration file list.
     */
    applicationConfigurations?: SpringbootappsPropertiesResponseApplicationConfigurations[];
    /**
     * The artifact name of SpringBootApp.
     */
    artifactName?: string;
    /**
     * The application binding port list.
     */
    bindingPorts?: number[];
    /**
     * The jdk version in build.
     */
    buildJdkVersion?: string;
    /**
     * The certificate file list.
     */
    certificates?: string[];
    /**
     * The checksum of jar file.
     */
    checksum?: string;
    /**
     * The connection string list.
     */
    connectionStrings?: string[];
    /**
     * The dependency list.
     */
    dependencies?: string[];
    /**
     * The environment variable list.
     */
    environments?: string[];
    /**
     * The list of errors.
     */
    errors?: ErrorResponse[];
    /**
     * The total instance count the app deployed.
     */
    instanceCount?: number;
    /**
     * The breakdown info for app instances on all the servers
     */
    instances?: SpringbootappsPropertiesResponseInstances[];
    /**
     * The jar file location on the server.
     */
    jarFileLocation?: string;
    /**
     * The jvm heap memory allocated.
     */
    jvmMemoryInMB?: number;
    /**
     * The jvm options.
     */
    jvmOptions?: string[];
    /**
     * Resource labels
     */
    labels?: {[key: string]: string};
    /**
     * Time when this springbootapps jar file was last modified.
     */
    lastModifiedTime?: string;
    /**
     * Time when this springbootapps instance was last refreshed.
     */
    lastUpdatedTime?: string;
    /**
     * The machine ARM id list the app belongs to.
     */
    machineArmIds?: string[];
    /**
     * The other types of date collected.
     */
    miscs?: SpringbootappsPropertiesResponseMiscs[];
    /**
     * The resource provisioning state.
     */
    provisioningState: string;
    /**
     * The jdk version installed on server
     */
    runtimeJdkVersion?: string;
    /**
     * The server list the app installed
     */
    servers?: string[];
    /**
     * The spring boot version.
     */
    springBootVersion?: string;
    /**
     * The static content location list.
     */
    staticContentLocations?: string[];
}

export interface SpringbootappsPropertiesResponseApplicationConfigurations {
    /**
     * The application config file name.
     */
    key: string;
    /**
     * The application config file content, only contains config keys.
     */
    value?: string;
}

export interface SpringbootappsPropertiesResponseInstances {
    /**
     * The instance count of this app instance
     */
    instanceCount?: number;
    /**
     * The jvm heap memory allocated of this app instance
     */
    jvmMemoryInMB?: number;
    /**
     * The machine ARM resource Id of this app instance
     */
    machineArmId: string;
}

export interface SpringbootappsPropertiesResponseMiscs {
    /**
     * The miscs. key.
     */
    key: string;
    /**
     * The miscs. value.
     */
    value?: string;
}

/**
 * The springbootservers resource definition.
 */
export interface SpringbootserversPropertiesResponse {
    /**
     * The list of errors.
     */
    errors?: ErrorResponse[];
    /**
     * The alternative FQDN or IP addresses to discover for this server
     */
    fqdnAndIpAddressList?: string[];
    /**
     * Resource labels
     */
    labels?: {[key: string]: string};
    /**
     * The machine Id from ARM
     */
    machineArmId?: string;
    /**
     * Target server port for remote login
     */
    port?: number;
    /**
     * The resource provisioning state.
     */
    provisioningState?: string;
    /**
     * Server is the target server name or ip address to discover of SpringBootServer.
     */
    server: string;
    /**
     * The total number of spring boot apps been discovered
     */
    springBootApps?: number;
    /**
     * The total number of apps been discovered
     */
    totalApps?: number;
}

/**
 * The extended location definition.
 */
export interface SpringbootsitesModelResponseExtendedLocation {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * The springbootsites resource definition.
 */
export interface SpringbootsitesPropertiesResponse {
    /**
     * The master site ID from Azure Migrate.
     */
    masterSiteId?: string;
    /**
     * The migrate project ID from Azure Migrate.
     */
    migrateProjectId?: string;
    /**
     * The resource provisioning state.
     */
    provisioningState?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
