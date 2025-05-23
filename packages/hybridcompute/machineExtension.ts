import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a Machine Extension.
 *
 * Uses Azure REST API version 2024-07-10. In version 2.x of the Azure Native provider, it used API version 2022-12-27.
 *
 * Other available API versions: 2020-08-15-preview, 2021-01-28-preview, 2021-03-25-preview, 2021-04-22-preview, 2021-05-17-preview, 2021-05-20, 2021-06-10-preview, 2021-12-10-preview, 2022-03-10, 2022-05-10-preview, 2022-08-11-preview, 2022-11-10, 2022-12-27, 2022-12-27-preview, 2023-03-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13, 2025-02-19-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MachineExtension extends pulumi.CustomResource {
    /**
     * Get an existing MachineExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineExtension {
        return new MachineExtension(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcompute:MachineExtension';

    /**
     * Returns true if the given object is an instance of MachineExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineExtension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineExtension.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes Machine Extension Properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.MachineExtensionPropertiesResponse>;
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
     * Create a MachineExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineExtensionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.machineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extensionName"] = args ? args.extensionName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["machineName"] = args ? args.machineName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute/v20190802preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20191212:MachineExtension" }, { type: "azure-native:hybridcompute/v20200730preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20200802:MachineExtension" }, { type: "azure-native:hybridcompute/v20200815preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210128preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210325preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210422preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210517preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210520:MachineExtension" }, { type: "azure-native:hybridcompute/v20210610preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20211210preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20220310:MachineExtension" }, { type: "azure-native:hybridcompute/v20220510preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20220811preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20221110:MachineExtension" }, { type: "azure-native:hybridcompute/v20221227:MachineExtension" }, { type: "azure-native:hybridcompute/v20221227preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20230315preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20230620preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20231003preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20240331preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20240520preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20240710:MachineExtension" }, { type: "azure-native:hybridcompute/v20240731preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20240910preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20241110preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20250113:MachineExtension" }, { type: "azure-native:hybridcompute/v20250219preview:MachineExtension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MachineExtension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineExtension resource.
 */
export interface MachineExtensionArgs {
    /**
     * The name of the machine extension.
     */
    extensionName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the machine where the extension should be created or updated.
     */
    machineName: pulumi.Input<string>;
    /**
     * Describes Machine Extension Properties.
     */
    properties?: pulumi.Input<types.inputs.MachineExtensionPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}