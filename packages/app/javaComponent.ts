import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Java Component.
 *
 * Uses Azure REST API version 2023-11-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01.
 */
export class JavaComponent extends pulumi.CustomResource {
    /**
     * Get an existing JavaComponent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JavaComponent {
        return new JavaComponent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:JavaComponent';

    /**
     * Returns true if the given object is an instance of JavaComponent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JavaComponent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JavaComponent.__pulumiType;
    }

    /**
     * Type of the Java Component.
     */
    public readonly componentType!: pulumi.Output<string | undefined>;
    /**
     * List of Java Components configuration properties
     */
    public readonly configurations!: pulumi.Output<types.outputs.JavaComponentConfigurationPropertyResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the Java Component.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of Java Components that are bound to the Java component
     */
    public readonly serviceBinds!: pulumi.Output<types.outputs.JavaComponentServiceBindResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JavaComponent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JavaComponentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["componentType"] = args ? args.componentType : undefined;
            resourceInputs["configurations"] = args ? args.configurations : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceBinds"] = args ? args.serviceBinds : undefined;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["componentType"] = undefined /*out*/;
            resourceInputs["configurations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceBinds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20231102preview:JavaComponent" }, { type: "azure-native:app/v20240202preview:JavaComponent" }, { type: "azure-native:app/v20240802preview:JavaComponent" }, { type: "azure-native:app/v20241002preview:JavaComponent" }, { type: "azure-native:app/v20250101:JavaComponent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JavaComponent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JavaComponent resource.
 */
export interface JavaComponentArgs {
    /**
     * Type of the Java Component.
     */
    componentType?: pulumi.Input<string | types.enums.JavaComponentType>;
    /**
     * List of Java Components configuration properties
     */
    configurations?: pulumi.Input<pulumi.Input<types.inputs.JavaComponentConfigurationPropertyArgs>[]>;
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the Java Component.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: pulumi.Input<pulumi.Input<types.inputs.JavaComponentServiceBindArgs>[]>;
}