import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure SQL job agent.
 */
export class JobAgent extends pulumi.CustomResource {
    /**
     * Get an existing JobAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobAgent {
        return new JobAgent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:JobAgent';

    /**
     * Returns true if the given object is an instance of JobAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobAgent.__pulumiType;
    }

    /**
     * Resource ID of the database to store job metadata in.
     */
    public readonly databaseId!: pulumi.Output<string>;
    /**
     * The identity of the job agent.
     */
    public readonly identity!: pulumi.Output<types.outputs.JobAgentIdentityResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name and tier of the SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The state of the job agent.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobAgentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["databaseId"] = args ? args.databaseId : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["databaseId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:JobAgent" }, { type: "azure-native:sql/v20170301preview:JobAgent" }, { type: "azure-native:sql/v20200202preview:JobAgent" }, { type: "azure-native:sql/v20200801preview:JobAgent" }, { type: "azure-native:sql/v20201101preview:JobAgent" }, { type: "azure-native:sql/v20210201preview:JobAgent" }, { type: "azure-native:sql/v20210501preview:JobAgent" }, { type: "azure-native:sql/v20210801preview:JobAgent" }, { type: "azure-native:sql/v20211101:JobAgent" }, { type: "azure-native:sql/v20211101preview:JobAgent" }, { type: "azure-native:sql/v20220201preview:JobAgent" }, { type: "azure-native:sql/v20220501preview:JobAgent" }, { type: "azure-native:sql/v20220801preview:JobAgent" }, { type: "azure-native:sql/v20221101preview:JobAgent" }, { type: "azure-native:sql/v20230201preview:JobAgent" }, { type: "azure-native:sql/v20230801preview:JobAgent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobAgent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobAgent resource.
 */
export interface JobAgentArgs {
    /**
     * Resource ID of the database to store job metadata in.
     */
    databaseId: pulumi.Input<string>;
    /**
     * The identity of the job agent.
     */
    identity?: pulumi.Input<types.inputs.JobAgentIdentityArgs>;
    /**
     * The name of the job agent to be created or updated.
     */
    jobAgentName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name and tier of the SKU.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}