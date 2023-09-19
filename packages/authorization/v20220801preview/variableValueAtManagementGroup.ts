import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The variable value.
 */
export class VariableValueAtManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing VariableValueAtManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VariableValueAtManagementGroup {
        return new VariableValueAtManagementGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization/v20220801preview:VariableValueAtManagementGroup';

    /**
     * Returns true if the given object is an instance of VariableValueAtManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VariableValueAtManagementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VariableValueAtManagementGroup.__pulumiType;
    }

    /**
     * The name of the variable.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource (Microsoft.Authorization/variables/values).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Variable value column value array.
     */
    public readonly values!: pulumi.Output<types.outputs.PolicyVariableValueColumnValueResponse[]>;

    /**
     * Create a VariableValueAtManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VariableValueAtManagementGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupId'");
            }
            if ((!args || args.values === undefined) && !opts.urn) {
                throw new Error("Missing required property 'values'");
            }
            if ((!args || args.variableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'variableName'");
            }
            resourceInputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            resourceInputs["values"] = args ? args.values : undefined;
            resourceInputs["variableName"] = args ? args.variableName : undefined;
            resourceInputs["variableValueName"] = args ? args.variableValueName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["values"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization:VariableValueAtManagementGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VariableValueAtManagementGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VariableValueAtManagementGroup resource.
 */
export interface VariableValueAtManagementGroupArgs {
    /**
     * The ID of the management group.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * Variable value column value array.
     */
    values: pulumi.Input<pulumi.Input<types.inputs.PolicyVariableValueColumnValueArgs>[]>;
    /**
     * The name of the variable to operate on.
     */
    variableName: pulumi.Input<string>;
    /**
     * The name of the variable value to operate on.
     */
    variableValueName?: pulumi.Input<string>;
}
