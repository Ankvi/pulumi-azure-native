import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the GuestAgent.
 */
export class GuestAgent extends pulumi.CustomResource {
    /**
     * Get an existing GuestAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GuestAgent {
        return new GuestAgent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:scvmm/v20220521preview:GuestAgent';

    /**
     * Returns true if the given object is an instance of GuestAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuestAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuestAgent.__pulumiType;
    }

    /**
     * Username / Password Credentials to provision guest agent.
     */
    public readonly credentials!: pulumi.Output<types.outputs.GuestCredentialResponse | undefined>;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    public /*out*/ readonly customResourceName!: pulumi.Output<string>;
    /**
     * HTTP Proxy configuration for the VM.
     */
    public readonly httpProxyConfig!: pulumi.Output<types.outputs.HttpProxyConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the guest agent provisioning action.
     */
    public readonly provisioningAction!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets the guest agent status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GuestAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuestAgentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualMachineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineName'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["guestAgentName"] = args ? args.guestAgentName : undefined;
            resourceInputs["httpProxyConfig"] = args ? args.httpProxyConfig : undefined;
            resourceInputs["provisioningAction"] = args ? args.provisioningAction : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["httpProxyConfig"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningAction"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm:GuestAgent" }, { type: "azure-native:scvmm/v20230401preview:GuestAgent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GuestAgent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GuestAgent resource.
 */
export interface GuestAgentArgs {
    /**
     * Username / Password Credentials to provision guest agent.
     */
    credentials?: pulumi.Input<types.inputs.GuestCredentialArgs>;
    /**
     * Name of the guestAgents.
     */
    guestAgentName?: pulumi.Input<string>;
    /**
     * HTTP Proxy configuration for the VM.
     */
    httpProxyConfig?: pulumi.Input<types.inputs.HttpProxyConfigurationArgs>;
    /**
     * Gets or sets the guest agent provisioning action.
     */
    provisioningAction?: pulumi.Input<string | types.enums.ProvisioningAction>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
}