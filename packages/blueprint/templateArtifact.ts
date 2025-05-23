import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Blueprint artifact that deploys a Resource Manager template.
 *
 * Uses Azure REST API version 2018-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-11-01-preview.
 */
export class TemplateArtifact extends pulumi.CustomResource {
    /**
     * Get an existing TemplateArtifact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TemplateArtifact {
        return new TemplateArtifact(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:blueprint:TemplateArtifact';

    /**
     * Returns true if the given object is an instance of TemplateArtifact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemplateArtifact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemplateArtifact.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Artifacts which need to be deployed before the specified artifact.
     */
    public readonly dependsOn!: pulumi.Output<string[] | undefined>;
    /**
     * Multi-line explain this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * One-liner string explain this resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Specifies the kind of blueprint artifact.
     * Expected value is 'template'.
     */
    public readonly kind!: pulumi.Output<"template">;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource Manager template blueprint artifact parameter values.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterValueResponse}>;
    /**
     * If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed.
     */
    public readonly resourceGroup!: pulumi.Output<string | undefined>;
    /**
     * The Resource Manager template blueprint artifact body.
     */
    public readonly template!: pulumi.Output<any>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TemplateArtifact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateArtifactArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.blueprintName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprintName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.parameters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parameters'");
            }
            if ((!args || args.resourceScope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceScope'");
            }
            if ((!args || args.template === undefined) && !opts.urn) {
                throw new Error("Missing required property 'template'");
            }
            resourceInputs["artifactName"] = args ? args.artifactName : undefined;
            resourceInputs["blueprintName"] = args ? args.blueprintName : undefined;
            resourceInputs["dependsOn"] = args ? args.dependsOn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["kind"] = "template";
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceScope"] = args ? args.resourceScope : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dependsOn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["template"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:blueprint/v20181101preview:PolicyAssignmentArtifact" }, { type: "azure-native:blueprint/v20181101preview:RoleAssignmentArtifact" }, { type: "azure-native:blueprint/v20181101preview:TemplateArtifact" }, { type: "azure-native:blueprint:PolicyAssignmentArtifact" }, { type: "azure-native:blueprint:RoleAssignmentArtifact" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TemplateArtifact.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TemplateArtifact resource.
 */
export interface TemplateArtifactArgs {
    /**
     * Name of the blueprint artifact.
     */
    artifactName?: pulumi.Input<string>;
    /**
     * Name of the blueprint definition.
     */
    blueprintName: pulumi.Input<string>;
    /**
     * Artifacts which need to be deployed before the specified artifact.
     */
    dependsOn?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Multi-line explain this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * One-liner string explain this resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies the kind of blueprint artifact.
     * Expected value is 'template'.
     */
    kind: pulumi.Input<"template">;
    /**
     * Resource Manager template blueprint artifact parameter values.
     */
    parameters: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterValueArgs>}>;
    /**
     * If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
    /**
     * The Resource Manager template blueprint artifact body.
     */
    template: any;
}