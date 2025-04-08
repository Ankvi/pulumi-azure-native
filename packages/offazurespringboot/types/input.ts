import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the error.
 */
export interface ErrorArgs {
    /**
     * The error code.
     */
    code?: pulumi.Input<string>;
    /**
     * The error ID.
     */
    id?: pulumi.Input<number>;
    /**
     * The detailed error message.
     */
    message?: pulumi.Input<string>;
    /**
     * The error possible causes.
     */
    possibleCauses?: pulumi.Input<string>;
    /**
     * The error recommended action
     */
    recommendedAction?: pulumi.Input<string>;
    /**
     * The account ID used to login.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * The error severity
     */
    severity?: pulumi.Input<string>;
    /**
     * The summarized error message.
     */
    summaryMessage?: pulumi.Input<string>;
    /**
     * Time when this error was last updated.
     */
    updatedTimeStamp?: pulumi.Input<string>;
}

/**
 * The springbootapps resource definition.
 */
export interface SpringbootappsPropertiesArgs {
    /**
     * The name of SpringBootApp.
     */
    appName?: pulumi.Input<string>;
    /**
     * The application port.
     */
    appPort?: pulumi.Input<number>;
    /**
     * The application type, whether it is a SpringBoot app.
     */
    appType?: pulumi.Input<string>;
    /**
     * The application configuration file list.
     */
    applicationConfigurations?: pulumi.Input<pulumi.Input<SpringbootappsPropertiesApplicationConfigurationsArgs>[]>;
    /**
     * The artifact name of SpringBootApp.
     */
    artifactName?: pulumi.Input<string>;
    /**
     * The application binding port list.
     */
    bindingPorts?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The jdk version in build.
     */
    buildJdkVersion?: pulumi.Input<string>;
    /**
     * The certificate file list.
     */
    certificates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The checksum of jar file.
     */
    checksum?: pulumi.Input<string>;
    /**
     * The connection string list.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The dependency list.
     */
    dependencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The environment variable list.
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of errors.
     */
    errors?: pulumi.Input<pulumi.Input<ErrorArgs>[]>;
    /**
     * The total instance count the app deployed.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * The breakdown info for app instances on all the servers
     */
    instances?: pulumi.Input<pulumi.Input<SpringbootappsPropertiesInstancesArgs>[]>;
    /**
     * The jar file location on the server.
     */
    jarFileLocation?: pulumi.Input<string>;
    /**
     * The jvm heap memory allocated.
     */
    jvmMemoryInMB?: pulumi.Input<number>;
    /**
     * The jvm options.
     */
    jvmOptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource labels
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Time when this springbootapps jar file was last modified.
     */
    lastModifiedTime?: pulumi.Input<string>;
    /**
     * Time when this springbootapps instance was last refreshed.
     */
    lastUpdatedTime?: pulumi.Input<string>;
    /**
     * The machine ARM id list the app belongs to.
     */
    machineArmIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The other types of date collected.
     */
    miscs?: pulumi.Input<pulumi.Input<SpringbootappsPropertiesMiscsArgs>[]>;
    /**
     * The jdk version installed on server
     */
    runtimeJdkVersion?: pulumi.Input<string>;
    /**
     * The server list the app installed
     */
    servers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The spring boot version.
     */
    springBootVersion?: pulumi.Input<string>;
    /**
     * The static content location list.
     */
    staticContentLocations?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SpringbootappsPropertiesApplicationConfigurationsArgs {
    /**
     * The application config file name.
     */
    key: pulumi.Input<string>;
    /**
     * The application config file content, only contains config keys.
     */
    value?: pulumi.Input<string>;
}

export interface SpringbootappsPropertiesInstancesArgs {
    /**
     * The instance count of this app instance
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * The jvm heap memory allocated of this app instance
     */
    jvmMemoryInMB?: pulumi.Input<number>;
    /**
     * The machine ARM resource Id of this app instance
     */
    machineArmId: pulumi.Input<string>;
}

export interface SpringbootappsPropertiesMiscsArgs {
    /**
     * The miscs. key.
     */
    key: pulumi.Input<string>;
    /**
     * The miscs. value.
     */
    value?: pulumi.Input<string>;
}

/**
 * The springbootservers resource definition.
 */
export interface SpringbootserversPropertiesArgs {
    /**
     * The list of errors.
     */
    errors?: pulumi.Input<pulumi.Input<ErrorArgs>[]>;
    /**
     * The alternative FQDN or IP addresses to discover for this server
     */
    fqdnAndIpAddressList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource labels
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The machine Id from ARM
     */
    machineArmId?: pulumi.Input<string>;
    /**
     * Target server port for remote login
     */
    port?: pulumi.Input<number>;
    /**
     * The resource provisioning state.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
    /**
     * Server is the target server name or ip address to discover of SpringBootServer.
     */
    server: pulumi.Input<string>;
    /**
     * The total number of spring boot apps been discovered
     */
    springBootApps?: pulumi.Input<number>;
    /**
     * The total number of apps been discovered
     */
    totalApps?: pulumi.Input<number>;
}

/**
 * The extended location definition.
 */
export interface SpringbootsitesModelExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name?: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type?: pulumi.Input<string>;
}

/**
 * The springbootsites resource definition.
 */
export interface SpringbootsitesPropertiesArgs {
    /**
     * The master site ID from Azure Migrate.
     */
    masterSiteId?: pulumi.Input<string>;
    /**
     * The migrate project ID from Azure Migrate.
     */
    migrateProjectId?: pulumi.Input<string>;
    /**
     * The resource provisioning state.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
}
