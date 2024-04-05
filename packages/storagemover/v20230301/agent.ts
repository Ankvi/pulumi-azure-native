import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Agent resource.
 */
export class Agent extends pulumi.CustomResource {
    /**
     * Get an existing Agent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Agent {
        return new Agent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagemover/v20230301:Agent';

    /**
     * Returns true if the given object is an instance of Agent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Agent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Agent.__pulumiType;
    }

    /**
     * The Agent status.
     */
    public /*out*/ readonly agentStatus!: pulumi.Output<string>;
    /**
     * The Agent version.
     */
    public /*out*/ readonly agentVersion!: pulumi.Output<string>;
    /**
     * The fully qualified resource ID of the Hybrid Compute resource for the Agent.
     */
    public readonly arcResourceId!: pulumi.Output<string>;
    /**
     * The VM UUID of the Hybrid Compute resource for the Agent.
     */
    public readonly arcVmUuid!: pulumi.Output<string>;
    /**
     * A description for the Agent.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly errorDetails!: pulumi.Output<types.outputs.AgentPropertiesResponseErrorDetails>;
    /**
     * The last updated time of the Agent status.
     */
    public /*out*/ readonly lastStatusUpdate!: pulumi.Output<string>;
    /**
     * Local IP address reported by the Agent.
     */
    public /*out*/ readonly localIPAddress!: pulumi.Output<string>;
    /**
     * Available memory reported by the Agent, in MB.
     */
    public /*out*/ readonly memoryInMB!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Available compute cores reported by the Agent.
     */
    public /*out*/ readonly numberOfCores!: pulumi.Output<number>;
    /**
     * The provisioning state of this resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource system metadata.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Uptime of the Agent in seconds.
     */
    public /*out*/ readonly uptimeInSeconds!: pulumi.Output<number>;

    /**
     * Create a Agent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.arcResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'arcResourceId'");
            }
            if ((!args || args.arcVmUuid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'arcVmUuid'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageMoverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageMoverName'");
            }
            resourceInputs["agentName"] = args ? args.agentName : undefined;
            resourceInputs["arcResourceId"] = args ? args.arcResourceId : undefined;
            resourceInputs["arcVmUuid"] = args ? args.arcVmUuid : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageMoverName"] = args ? args.storageMoverName : undefined;
            resourceInputs["agentStatus"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["errorDetails"] = undefined /*out*/;
            resourceInputs["lastStatusUpdate"] = undefined /*out*/;
            resourceInputs["localIPAddress"] = undefined /*out*/;
            resourceInputs["memoryInMB"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfCores"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uptimeInSeconds"] = undefined /*out*/;
        } else {
            resourceInputs["agentStatus"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["arcResourceId"] = undefined /*out*/;
            resourceInputs["arcVmUuid"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["errorDetails"] = undefined /*out*/;
            resourceInputs["lastStatusUpdate"] = undefined /*out*/;
            resourceInputs["localIPAddress"] = undefined /*out*/;
            resourceInputs["memoryInMB"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfCores"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uptimeInSeconds"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagemover:Agent" }, { type: "azure-native:storagemover/v20220701preview:Agent" }, { type: "azure-native:storagemover/v20230701preview:Agent" }, { type: "azure-native:storagemover/v20231001:Agent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Agent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Agent resource.
 */
export interface AgentArgs {
    /**
     * The name of the Agent resource.
     */
    agentName?: pulumi.Input<string>;
    /**
     * The fully qualified resource ID of the Hybrid Compute resource for the Agent.
     */
    arcResourceId: pulumi.Input<string>;
    /**
     * The VM UUID of the Hybrid Compute resource for the Agent.
     */
    arcVmUuid: pulumi.Input<string>;
    /**
     * A description for the Agent.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: pulumi.Input<string>;
}