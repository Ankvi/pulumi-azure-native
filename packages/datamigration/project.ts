import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A project resource
 * Azure REST API version: 2021-06-30. Prior API version in Azure Native 1.x: 2018-04-19.
 *
 * Other available API versions: 2017-11-15-preview, 2018-03-31-preview, 2021-10-30-preview, 2022-03-30-preview, 2023-07-15-preview.
 */
export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datamigration:Project';

    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Project {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }

    /**
     * UTC Date and time when project was created
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * List of DatabaseInfo
     */
    public readonly databasesInfo!: pulumi.Output<types.outputs.DatabaseInfoResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The project's provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Information for connecting to source
     */
    public readonly sourceConnectionInfo!: pulumi.Output<types.outputs.MiSqlConnectionInfoResponse | types.outputs.MongoDbConnectionInfoResponse | types.outputs.MySqlConnectionInfoResponse | types.outputs.OracleConnectionInfoResponse | types.outputs.PostgreSqlConnectionInfoResponse | types.outputs.SqlConnectionInfoResponse | undefined>;
    /**
     * Source platform for the project
     */
    public readonly sourcePlatform!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Information for connecting to target
     */
    public readonly targetConnectionInfo!: pulumi.Output<types.outputs.MiSqlConnectionInfoResponse | types.outputs.MongoDbConnectionInfoResponse | types.outputs.MySqlConnectionInfoResponse | types.outputs.OracleConnectionInfoResponse | types.outputs.PostgreSqlConnectionInfoResponse | types.outputs.SqlConnectionInfoResponse | undefined>;
    /**
     * Target platform for the project
     */
    public readonly targetPlatform!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.sourcePlatform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourcePlatform'");
            }
            if ((!args || args.targetPlatform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetPlatform'");
            }
            resourceInputs["databasesInfo"] = args ? args.databasesInfo : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sourceConnectionInfo"] = args ? args.sourceConnectionInfo : undefined;
            resourceInputs["sourcePlatform"] = args ? args.sourcePlatform : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetConnectionInfo"] = args ? args.targetConnectionInfo : undefined;
            resourceInputs["targetPlatform"] = args ? args.targetPlatform : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["databasesInfo"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceConnectionInfo"] = undefined /*out*/;
            resourceInputs["sourcePlatform"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetConnectionInfo"] = undefined /*out*/;
            resourceInputs["targetPlatform"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration/v20171115preview:Project" }, { type: "azure-native:datamigration/v20180315preview:Project" }, { type: "azure-native:datamigration/v20180331preview:Project" }, { type: "azure-native:datamigration/v20180419:Project" }, { type: "azure-native:datamigration/v20180715preview:Project" }, { type: "azure-native:datamigration/v20210630:Project" }, { type: "azure-native:datamigration/v20211030preview:Project" }, { type: "azure-native:datamigration/v20220130preview:Project" }, { type: "azure-native:datamigration/v20220330preview:Project" }, { type: "azure-native:datamigration/v20230715preview:Project" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Project.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * List of DatabaseInfo
     */
    databasesInfo?: pulumi.Input<pulumi.Input<types.inputs.DatabaseInfoArgs>[]>;
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the project
     */
    projectName?: pulumi.Input<string>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo?: pulumi.Input<types.inputs.MiSqlConnectionInfoArgs | types.inputs.MongoDbConnectionInfoArgs | types.inputs.MySqlConnectionInfoArgs | types.inputs.OracleConnectionInfoArgs | types.inputs.PostgreSqlConnectionInfoArgs | types.inputs.SqlConnectionInfoArgs>;
    /**
     * Source platform for the project
     */
    sourcePlatform: pulumi.Input<string | types.enums.ProjectSourcePlatform>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo?: pulumi.Input<types.inputs.MiSqlConnectionInfoArgs | types.inputs.MongoDbConnectionInfoArgs | types.inputs.MySqlConnectionInfoArgs | types.inputs.OracleConnectionInfoArgs | types.inputs.PostgreSqlConnectionInfoArgs | types.inputs.SqlConnectionInfoArgs>;
    /**
     * Target platform for the project
     */
    targetPlatform: pulumi.Input<string | types.enums.ProjectTargetPlatform>;
}