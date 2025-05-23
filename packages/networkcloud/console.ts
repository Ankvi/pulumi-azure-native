import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-02-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Console extends pulumi.CustomResource {
    /**
     * Get an existing Console resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Console {
        return new Console(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:Console';

    /**
     * Returns true if the given object is an instance of Console.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Console {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Console.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The more detailed status of the console.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The indicator of whether the console access is enabled.
     */
    public readonly enabled!: pulumi.Output<string>;
    /**
     * Resource ETag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The date and time after which the key will be disallowed access.
     */
    public readonly expiration!: pulumi.Output<string | undefined>;
    /**
     * The extended location of the cluster manager associated with the cluster this virtual machine is created on.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource ID of the private link service that is used to provide virtual machine console access.
     */
    public /*out*/ readonly privateLinkServiceId!: pulumi.Output<string>;
    /**
     * The provisioning state of the virtual machine console.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in.
     */
    public readonly sshPublicKey!: pulumi.Output<types.outputs.SshPublicKeyResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique identifier for the virtual machine that is used to access the console.
     */
    public /*out*/ readonly virtualMachineAccessId!: pulumi.Output<string>;

    /**
     * Create a Console resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsoleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sshPublicKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sshPublicKey'");
            }
            if ((!args || args.virtualMachineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineName'");
            }
            resourceInputs["consoleName"] = args ? args.consoleName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["expiration"] = args ? args.expiration : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sshPublicKey"] = args ? args.sshPublicKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkServiceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachineAccessId"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expiration"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkServiceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sshPublicKey"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachineAccessId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:Console" }, { type: "azure-native:networkcloud/v20231001preview:Console" }, { type: "azure-native:networkcloud/v20240601preview:Console" }, { type: "azure-native:networkcloud/v20240701:Console" }, { type: "azure-native:networkcloud/v20241001preview:Console" }, { type: "azure-native:networkcloud/v20250201:Console" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Console.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Console resource.
 */
export interface ConsoleArgs {
    /**
     * The name of the virtual machine console.
     */
    consoleName?: pulumi.Input<string>;
    /**
     * The indicator of whether the console access is enabled.
     */
    enabled: pulumi.Input<string | types.enums.ConsoleEnabled>;
    /**
     * The date and time after which the key will be disallowed access.
     */
    expiration?: pulumi.Input<string>;
    /**
     * The extended location of the cluster manager associated with the cluster this virtual machine is created on.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in.
     */
    sshPublicKey: pulumi.Input<types.inputs.SshPublicKeyArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the virtual machine.
     */
    virtualMachineName: pulumi.Input<string>;
}