import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Logger details.
 */
export class Logger extends pulumi.CustomResource {
    /**
     * Get an existing Logger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Logger {
        return new Logger(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20191201preview:Logger';

    /**
     * Returns true if the given object is an instance of Logger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Logger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Logger.__pulumiType;
    }

    /**
     * The name and SendRule connection string of the event hub for azureEventHub logger.
     * Instrumentation key for applicationInsights logger.
     */
    public readonly credentials!: pulumi.Output<{[key: string]: string}>;
    /**
     * Logger description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether records are buffered in the logger before publishing. Default is assumed to be true.
     */
    public readonly isBuffered!: pulumi.Output<boolean | undefined>;
    /**
     * Logger type.
     */
    public readonly loggerType!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Logger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoggerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.credentials === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credentials'");
            }
            if ((!args || args.loggerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loggerType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isBuffered"] = args ? args.isBuffered : undefined;
            resourceInputs["loggerId"] = args ? args.loggerId : undefined;
            resourceInputs["loggerType"] = args ? args.loggerType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["isBuffered"] = undefined /*out*/;
            resourceInputs["loggerType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:Logger" }, { type: "azure-native:apimanagement/v20160707:Logger" }, { type: "azure-native:apimanagement/v20161010:Logger" }, { type: "azure-native:apimanagement/v20170301:Logger" }, { type: "azure-native:apimanagement/v20180101:Logger" }, { type: "azure-native:apimanagement/v20180601preview:Logger" }, { type: "azure-native:apimanagement/v20190101:Logger" }, { type: "azure-native:apimanagement/v20191201:Logger" }, { type: "azure-native:apimanagement/v20200601preview:Logger" }, { type: "azure-native:apimanagement/v20201201:Logger" }, { type: "azure-native:apimanagement/v20210101preview:Logger" }, { type: "azure-native:apimanagement/v20210401preview:Logger" }, { type: "azure-native:apimanagement/v20210801:Logger" }, { type: "azure-native:apimanagement/v20211201preview:Logger" }, { type: "azure-native:apimanagement/v20220401preview:Logger" }, { type: "azure-native:apimanagement/v20220801:Logger" }, { type: "azure-native:apimanagement/v20220901preview:Logger" }, { type: "azure-native:apimanagement/v20230301preview:Logger" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Logger.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Logger resource.
 */
export interface LoggerArgs {
    /**
     * The name and SendRule connection string of the event hub for azureEventHub logger.
     * Instrumentation key for applicationInsights logger.
     */
    credentials: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Logger description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether records are buffered in the logger before publishing. Default is assumed to be true.
     */
    isBuffered?: pulumi.Input<boolean>;
    /**
     * Logger identifier. Must be unique in the API Management service instance.
     */
    loggerId?: pulumi.Input<string>;
    /**
     * Logger type.
     */
    loggerType: pulumi.Input<string | types.enums.LoggerType>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
