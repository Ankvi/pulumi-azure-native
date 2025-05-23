import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * DevOps Configuration resource.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-09-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-15-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DevOpsConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DevOpsConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DevOpsConfiguration {
        return new DevOpsConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:DevOpsConfiguration';

    /**
     * Returns true if the given object is an instance of DevOpsConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DevOpsConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DevOpsConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * DevOps Configuration properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.DevOpsConfigurationPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DevOpsConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DevOpsConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.securityConnectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityConnectorName'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityConnectorName"] = args ? args.securityConnectorName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20230901preview:DevOpsConfiguration" }, { type: "azure-native:security/v20240401:DevOpsConfiguration" }, { type: "azure-native:security/v20240515preview:DevOpsConfiguration" }, { type: "azure-native:security/v20250301:DevOpsConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DevOpsConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DevOpsConfiguration resource.
 */
export interface DevOpsConfigurationArgs {
    /**
     * DevOps Configuration properties.
     */
    properties?: pulumi.Input<types.inputs.DevOpsConfigurationPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}