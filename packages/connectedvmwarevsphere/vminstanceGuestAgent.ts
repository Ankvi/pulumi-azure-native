import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the GuestAgent.
 *
 * Uses Azure REST API version 2023-12-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VMInstanceGuestAgent extends pulumi.CustomResource {
    /**
     * Get an existing VMInstanceGuestAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VMInstanceGuestAgent {
        return new VMInstanceGuestAgent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:VMInstanceGuestAgent';

    /**
     * Returns true if the given object is an instance of VMInstanceGuestAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VMInstanceGuestAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VMInstanceGuestAgent.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * The resource id of the private link scope this machine is assigned to, if any.
     */
    public readonly privateLinkScopeResourceId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the guest agent provisioning action.
     */
    public readonly provisioningAction!: pulumi.Output<string | undefined>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets the guest agent status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ResourceStatusResponse[]>;
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
     * Create a VMInstanceGuestAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VMInstanceGuestAgentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["httpProxyConfig"] = args ? args.httpProxyConfig : undefined;
            resourceInputs["privateLinkScopeResourceId"] = args ? args.privateLinkScopeResourceId : undefined;
            resourceInputs["provisioningAction"] = args ? args.provisioningAction : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["httpProxyConfig"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkScopeResourceId"] = undefined /*out*/;
            resourceInputs["provisioningAction"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20230301preview:VMInstanceGuestAgent" }, { type: "azure-native:connectedvmwarevsphere/v20231001:VMInstanceGuestAgent" }, { type: "azure-native:connectedvmwarevsphere/v20231201:VMInstanceGuestAgent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VMInstanceGuestAgent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VMInstanceGuestAgent resource.
 */
export interface VMInstanceGuestAgentArgs {
    /**
     * Username / Password Credentials to provision guest agent.
     */
    credentials?: pulumi.Input<types.inputs.GuestCredentialArgs>;
    /**
     * HTTP Proxy configuration for the VM.
     */
    httpProxyConfig?: pulumi.Input<types.inputs.HttpProxyConfigurationArgs>;
    /**
     * The resource id of the private link scope this machine is assigned to, if any.
     */
    privateLinkScopeResourceId?: pulumi.Input<string>;
    /**
     * Gets or sets the guest agent provisioning action.
     */
    provisioningAction?: pulumi.Input<string | types.enums.ProvisioningAction>;
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: pulumi.Input<string>;
}