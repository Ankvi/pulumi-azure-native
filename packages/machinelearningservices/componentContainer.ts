import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2022-02-01-preview.
 *
 * Other available API versions: 2022-02-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview.
 */
export class ComponentContainer extends pulumi.CustomResource {
    /**
     * Get an existing ComponentContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ComponentContainer {
        return new ComponentContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:ComponentContainer';

    /**
     * Returns true if the given object is an instance of ComponentContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComponentContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComponentContainer.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly componentContainerProperties!: pulumi.Output<types.outputs.ComponentContainerResponse>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ComponentContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComponentContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.componentContainerProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentContainerProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["componentContainerProperties"] = args ? (args.componentContainerProperties ? pulumi.output(args.componentContainerProperties).apply(types.inputs.componentContainerArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["componentContainerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20220201preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20220501:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20220601preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20221001:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20221001preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20221201preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20230201preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20230401:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20230401preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20230601preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20230801preview:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20231001:ComponentContainer" }, { type: "azure-native:machinelearningservices/v20240101preview:ComponentContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ComponentContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ComponentContainer resource.
 */
export interface ComponentContainerArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    componentContainerProperties: pulumi.Input<types.inputs.ComponentContainerArgs>;
    /**
     * Container name.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}