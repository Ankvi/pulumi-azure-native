import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of hybrid runbook worker.
 */
export class HybridRunbookWorker extends pulumi.CustomResource {
    /**
     * Get an existing HybridRunbookWorker resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridRunbookWorker {
        return new HybridRunbookWorker(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation/v20231101:HybridRunbookWorker';

    /**
     * Returns true if the given object is an instance of HybridRunbookWorker.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HybridRunbookWorker {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HybridRunbookWorker.__pulumiType;
    }

    /**
     * Gets or sets the assigned machine IP address.
     */
    public /*out*/ readonly ip!: pulumi.Output<string | undefined>;
    /**
     * Last Heartbeat from the Worker
     */
    public /*out*/ readonly lastSeenDateTime!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the registration time of the worker machine.
     */
    public /*out*/ readonly registeredDateTime!: pulumi.Output<string | undefined>;
    /**
     * Resource system metadata.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Azure Resource Manager Id for a virtual machine.
     */
    public readonly vmResourceId!: pulumi.Output<string | undefined>;
    /**
     * Name of the HybridWorker.
     */
    public /*out*/ readonly workerName!: pulumi.Output<string | undefined>;
    /**
     * Type of the HybridWorker.
     */
    public /*out*/ readonly workerType!: pulumi.Output<string | undefined>;

    /**
     * Create a HybridRunbookWorker resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridRunbookWorkerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.hybridRunbookWorkerGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hybridRunbookWorkerGroupName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["hybridRunbookWorkerGroupName"] = args ? args.hybridRunbookWorkerGroupName : undefined;
            resourceInputs["hybridRunbookWorkerId"] = args ? args.hybridRunbookWorkerId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vmResourceId"] = args ? args.vmResourceId : undefined;
            resourceInputs["ip"] = undefined /*out*/;
            resourceInputs["lastSeenDateTime"] = undefined /*out*/;
            resourceInputs["registeredDateTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workerName"] = undefined /*out*/;
            resourceInputs["workerType"] = undefined /*out*/;
        } else {
            resourceInputs["ip"] = undefined /*out*/;
            resourceInputs["lastSeenDateTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["registeredDateTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmResourceId"] = undefined /*out*/;
            resourceInputs["workerName"] = undefined /*out*/;
            resourceInputs["workerType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation:HybridRunbookWorker" }, { type: "azure-native:automation/v20210622:HybridRunbookWorker" }, { type: "azure-native:automation/v20220808:HybridRunbookWorker" }, { type: "azure-native:automation/v20230515preview:HybridRunbookWorker" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HybridRunbookWorker.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HybridRunbookWorker resource.
 */
export interface HybridRunbookWorkerArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The hybrid runbook worker group name
     */
    hybridRunbookWorkerGroupName: pulumi.Input<string>;
    /**
     * The hybrid runbook worker id
     */
    hybridRunbookWorkerId?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Resource Manager Id for a virtual machine.
     */
    vmResourceId?: pulumi.Input<string>;
}
