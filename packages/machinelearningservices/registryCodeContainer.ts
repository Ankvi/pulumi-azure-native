import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview.
 */
export class RegistryCodeContainer extends pulumi.CustomResource {
    /**
     * Get an existing RegistryCodeContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistryCodeContainer {
        return new RegistryCodeContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:RegistryCodeContainer';

    /**
     * Returns true if the given object is an instance of RegistryCodeContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryCodeContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryCodeContainer.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly codeContainerProperties!: pulumi.Output<types.outputs.CodeContainerResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegistryCodeContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryCodeContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.codeContainerProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'codeContainerProperties'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["codeContainerProperties"] = args ? (args.codeContainerProperties ? pulumi.output(args.codeContainerProperties).apply(types.inputs.codeContainerArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["codeName"] = args ? args.codeName : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["codeContainerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20221001preview:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20221201preview:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20230201preview:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20230401:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20230401preview:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20230601preview:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20230801preview:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20231001:RegistryCodeContainer" }, { type: "azure-native:machinelearningservices/v20240101preview:RegistryCodeContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistryCodeContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistryCodeContainer resource.
 */
export interface RegistryCodeContainerArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    codeContainerProperties: pulumi.Input<types.inputs.CodeContainerArgs>;
    /**
     * Container name.
     */
    codeName?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}