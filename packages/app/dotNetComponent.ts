import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * .NET Component.
 *
 * Uses Azure REST API version 2025-02-02-preview. In version 2.x of the Azure Native provider, it used API version 2023-11-02-preview.
 *
 * Other available API versions: 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DotNetComponent extends pulumi.CustomResource {
    /**
     * Get an existing DotNetComponent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DotNetComponent {
        return new DotNetComponent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:DotNetComponent';

    /**
     * Returns true if the given object is an instance of DotNetComponent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DotNetComponent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DotNetComponent.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * Type of the .NET Component.
     */
    declare public readonly componentType: pulumi.Output<string | undefined>;
    /**
     * List of .NET Components configuration properties
     */
    declare public readonly configurations: pulumi.Output<types.outputs.DotNetComponentConfigurationPropertyResponse[] | undefined>;
    /**
     * The name of the resource
     */
    declare public readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the .NET Component.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * List of .NET Components that are bound to the .NET component
     */
    declare public readonly serviceBinds: pulumi.Output<types.outputs.DotNetComponentServiceBindResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a DotNetComponent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DotNetComponentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.environmentName === undefined && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["componentType"] = args?.componentType;
            resourceInputs["configurations"] = args?.configurations;
            resourceInputs["environmentName"] = args?.environmentName;
            resourceInputs["name"] = args?.name;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["serviceBinds"] = args?.serviceBinds;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["componentType"] = undefined /*out*/;
            resourceInputs["configurations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceBinds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20231102preview:DotNetComponent" }, { type: "azure-native:app/v20240202preview:DotNetComponent" }, { type: "azure-native:app/v20240802preview:DotNetComponent" }, { type: "azure-native:app/v20241002preview:DotNetComponent" }, { type: "azure-native:app/v20250202preview:DotNetComponent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DotNetComponent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DotNetComponent resource.
 */
export interface DotNetComponentArgs {
    /**
     * Type of the .NET Component.
     */
    componentType?: pulumi.Input<string | types.enums.DotNetComponentType>;
    /**
     * List of .NET Components configuration properties
     */
    configurations?: pulumi.Input<pulumi.Input<types.inputs.DotNetComponentConfigurationPropertyArgs>[]>;
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the .NET Component.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of .NET Components that are bound to the .NET component
     */
    serviceBinds?: pulumi.Input<pulumi.Input<types.inputs.DotNetComponentServiceBindArgs>[]>;
}