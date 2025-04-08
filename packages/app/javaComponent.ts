import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Java Component.
 *
 * Uses Azure REST API version 2024-10-02-preview. In version 2.x of the Azure Native provider, it used API version 2023-11-02-preview.
 *
 * Other available API versions: 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Java Component resource specific properties
     */
    public readonly properties!: pulumi.Output<types.outputs.NacosComponentResponse | types.outputs.SpringBootAdminComponentResponse | types.outputs.SpringCloudConfigComponentResponse | types.outputs.SpringCloudEurekaComponentResponse | types.outputs.SpringCloudGatewayComponentResponse>;
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
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the Java Component.
     */
    name?: pulumi.Input<string>;
    /**
     * Java Component resource specific properties
     */
    properties?: pulumi.Input<types.inputs.NacosComponentArgs | types.inputs.SpringBootAdminComponentArgs | types.inputs.SpringCloudConfigComponentArgs | types.inputs.SpringCloudEurekaComponentArgs | types.inputs.SpringCloudGatewayComponentArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}