import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Deployment stack object.
 *
 * Uses Azure REST API version 2022-08-01-preview.
 *
 * Other available API versions: 2024-03-01.
 */
export class DeploymentStackAtManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing DeploymentStackAtManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeploymentStackAtManagementGroup {
        return new DeploymentStackAtManagementGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources:DeploymentStackAtManagementGroup';

    /**
     * Returns true if the given object is an instance of DeploymentStackAtManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeploymentStackAtManagementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeploymentStackAtManagementGroup.__pulumiType;
    }

    /**
     * Defines the behavior of resources that are not managed immediately after the stack is updated.
     */
    public readonly actionOnUnmanage!: pulumi.Output<types.outputs.DeploymentStackPropertiesResponseActionOnUnmanage>;
    /**
     * The debug setting of the deployment.
     */
    public readonly debugSetting!: pulumi.Output<types.outputs.DeploymentStacksDebugSettingResponse | undefined>;
    /**
     * An array of resources that were deleted during the most recent update.
     */
    public /*out*/ readonly deletedResources!: pulumi.Output<types.outputs.ResourceReferenceResponse[]>;
    /**
     * Defines how resources deployed by the stack are locked.
     */
    public readonly denySettings!: pulumi.Output<types.outputs.DenySettingsResponse>;
    /**
     * The resourceId of the deployment resource created by the deployment stack.
     */
    public /*out*/ readonly deploymentId!: pulumi.Output<string>;
    /**
     * The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
     */
    public readonly deploymentScope!: pulumi.Output<string | undefined>;
    /**
     * Deployment stack description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * An array of resources that were detached during the most recent update.
     */
    public /*out*/ readonly detachedResources!: pulumi.Output<types.outputs.ResourceReferenceResponse[]>;
    /**
     * The duration of the deployment stack update.
     */
    public /*out*/ readonly duration!: pulumi.Output<string>;
    /**
     * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
     */
    public /*out*/ readonly error!: pulumi.Output<types.outputs.ErrorResponseResponse | undefined>;
    /**
     * An array of resources that failed to reach goal state during the most recent update.
     */
    public /*out*/ readonly failedResources!: pulumi.Output<types.outputs.ResourceReferenceExtendedResponse[]>;
    /**
     * The location of the deployment stack. It cannot be changed after creation. It must be one of the supported Azure locations.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The outputs of the underlying deployment.
     */
    public /*out*/ readonly outputs!: pulumi.Output<any>;
    /**
     * Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
     */
    public readonly parameters!: pulumi.Output<any | undefined>;
    /**
     * The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
     */
    public readonly parametersLink!: pulumi.Output<types.outputs.DeploymentStacksParametersLinkResponse | undefined>;
    /**
     * State of the deployment stack.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * An array of resources currently managed by the deployment stack.
     */
    public /*out*/ readonly resources!: pulumi.Output<types.outputs.ManagedResourceReferenceResponse[]>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Deployment stack resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DeploymentStackAtManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentStackAtManagementGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.actionOnUnmanage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actionOnUnmanage'");
            }
            if ((!args || args.denySettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'denySettings'");
            }
            if ((!args || args.managementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupId'");
            }
            resourceInputs["actionOnUnmanage"] = args ? args.actionOnUnmanage : undefined;
            resourceInputs["debugSetting"] = args ? args.debugSetting : undefined;
            resourceInputs["denySettings"] = args ? args.denySettings : undefined;
            resourceInputs["deploymentScope"] = args ? args.deploymentScope : undefined;
            resourceInputs["deploymentStackName"] = args ? args.deploymentStackName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["parametersLink"] = args ? args.parametersLink : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["templateLink"] = args ? args.templateLink : undefined;
            resourceInputs["deletedResources"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["detachedResources"] = undefined /*out*/;
            resourceInputs["duration"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["failedResources"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actionOnUnmanage"] = undefined /*out*/;
            resourceInputs["debugSetting"] = undefined /*out*/;
            resourceInputs["deletedResources"] = undefined /*out*/;
            resourceInputs["denySettings"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["deploymentScope"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["detachedResources"] = undefined /*out*/;
            resourceInputs["duration"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["failedResources"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["parametersLink"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources/v20220801preview:DeploymentStackAtManagementGroup" }, { type: "azure-native:resources/v20240301:DeploymentStackAtManagementGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DeploymentStackAtManagementGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeploymentStackAtManagementGroup resource.
 */
export interface DeploymentStackAtManagementGroupArgs {
    /**
     * Defines the behavior of resources that are not managed immediately after the stack is updated.
     */
    actionOnUnmanage: pulumi.Input<types.inputs.DeploymentStackPropertiesActionOnUnmanageArgs>;
    /**
     * The debug setting of the deployment.
     */
    debugSetting?: pulumi.Input<types.inputs.DeploymentStacksDebugSettingArgs>;
    /**
     * Defines how resources deployed by the stack are locked.
     */
    denySettings: pulumi.Input<types.inputs.DenySettingsArgs>;
    /**
     * The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
     */
    deploymentScope?: pulumi.Input<string>;
    /**
     * Name of the deployment stack.
     */
    deploymentStackName?: pulumi.Input<string>;
    /**
     * Deployment stack description.
     */
    description?: pulumi.Input<string>;
    /**
     * The location of the deployment stack. It cannot be changed after creation. It must be one of the supported Azure locations.
     */
    location?: pulumi.Input<string>;
    /**
     * Management Group.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
     */
    parameters?: any;
    /**
     * The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
     */
    parametersLink?: pulumi.Input<types.inputs.DeploymentStacksParametersLinkArgs>;
    /**
     * Deployment stack resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
     */
    template?: any;
    /**
     * The URI of the template. Use either the templateLink property or the template property, but not both.
     */
    templateLink?: pulumi.Input<types.inputs.DeploymentStacksTemplateLinkArgs>;
}