import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The prediction resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 2.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class Prediction extends pulumi.CustomResource {
    /**
     * Get an existing Prediction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Prediction {
        return new Prediction(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:Prediction';

    /**
     * Returns true if the given object is an instance of Prediction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Prediction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Prediction.__pulumiType;
    }

    /**
     * Whether do auto analyze.
     */
    public readonly autoAnalyze!: pulumi.Output<boolean>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of the prediction.
     */
    public readonly description!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Display name of the prediction.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The prediction grades.
     */
    public readonly grades!: pulumi.Output<types.outputs.PredictionResponseGrades[] | undefined>;
    /**
     * Interaction types involved in the prediction.
     */
    public readonly involvedInteractionTypes!: pulumi.Output<string[] | undefined>;
    /**
     * KPI types involved in the prediction.
     */
    public readonly involvedKpiTypes!: pulumi.Output<string[] | undefined>;
    /**
     * Relationships involved in the prediction.
     */
    public readonly involvedRelationships!: pulumi.Output<string[] | undefined>;
    /**
     * Definition of the link mapping of prediction.
     */
    public readonly mappings!: pulumi.Output<types.outputs.PredictionResponseMappings>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Negative outcome expression.
     */
    public readonly negativeOutcomeExpression!: pulumi.Output<string>;
    /**
     * Positive outcome expression.
     */
    public readonly positiveOutcomeExpression!: pulumi.Output<string>;
    /**
     * Name of the prediction.
     */
    public readonly predictionName!: pulumi.Output<string | undefined>;
    /**
     * Primary profile type.
     */
    public readonly primaryProfileType!: pulumi.Output<string>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Scope expression.
     */
    public readonly scopeExpression!: pulumi.Output<string>;
    /**
     * Score label.
     */
    public readonly scoreLabel!: pulumi.Output<string>;
    /**
     * System generated entities.
     */
    public /*out*/ readonly systemGeneratedEntities!: pulumi.Output<types.outputs.PredictionResponseSystemGeneratedEntities>;
    /**
     * The hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Prediction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PredictionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.autoAnalyze === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoAnalyze'");
            }
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.mappings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mappings'");
            }
            if ((!args || args.negativeOutcomeExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'negativeOutcomeExpression'");
            }
            if ((!args || args.positiveOutcomeExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'positiveOutcomeExpression'");
            }
            if ((!args || args.primaryProfileType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'primaryProfileType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scopeExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopeExpression'");
            }
            if ((!args || args.scoreLabel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scoreLabel'");
            }
            resourceInputs["autoAnalyze"] = args ? args.autoAnalyze : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["grades"] = args ? args.grades : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["involvedInteractionTypes"] = args ? args.involvedInteractionTypes : undefined;
            resourceInputs["involvedKpiTypes"] = args ? args.involvedKpiTypes : undefined;
            resourceInputs["involvedRelationships"] = args ? args.involvedRelationships : undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
            resourceInputs["negativeOutcomeExpression"] = args ? args.negativeOutcomeExpression : undefined;
            resourceInputs["positiveOutcomeExpression"] = args ? args.positiveOutcomeExpression : undefined;
            resourceInputs["predictionName"] = args ? args.predictionName : undefined;
            resourceInputs["primaryProfileType"] = args ? args.primaryProfileType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopeExpression"] = args ? args.scopeExpression : undefined;
            resourceInputs["scoreLabel"] = args ? args.scoreLabel : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemGeneratedEntities"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoAnalyze"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["grades"] = undefined /*out*/;
            resourceInputs["involvedInteractionTypes"] = undefined /*out*/;
            resourceInputs["involvedKpiTypes"] = undefined /*out*/;
            resourceInputs["involvedRelationships"] = undefined /*out*/;
            resourceInputs["mappings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["negativeOutcomeExpression"] = undefined /*out*/;
            resourceInputs["positiveOutcomeExpression"] = undefined /*out*/;
            resourceInputs["predictionName"] = undefined /*out*/;
            resourceInputs["primaryProfileType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scopeExpression"] = undefined /*out*/;
            resourceInputs["scoreLabel"] = undefined /*out*/;
            resourceInputs["systemGeneratedEntities"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170426:Prediction" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Prediction.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Prediction resource.
 */
export interface PredictionArgs {
    /**
     * Whether do auto analyze.
     */
    autoAnalyze: pulumi.Input<boolean>;
    /**
     * Description of the prediction.
     */
    description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Display name of the prediction.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The prediction grades.
     */
    grades?: pulumi.Input<pulumi.Input<types.inputs.PredictionGradesArgs>[]>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * Interaction types involved in the prediction.
     */
    involvedInteractionTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * KPI types involved in the prediction.
     */
    involvedKpiTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Relationships involved in the prediction.
     */
    involvedRelationships?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Definition of the link mapping of prediction.
     */
    mappings: pulumi.Input<types.inputs.PredictionMappingsArgs>;
    /**
     * Negative outcome expression.
     */
    negativeOutcomeExpression: pulumi.Input<string>;
    /**
     * Positive outcome expression.
     */
    positiveOutcomeExpression: pulumi.Input<string>;
    /**
     * Name of the prediction.
     */
    predictionName?: pulumi.Input<string>;
    /**
     * Primary profile type.
     */
    primaryProfileType: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Scope expression.
     */
    scopeExpression: pulumi.Input<string>;
    /**
     * Score label.
     */
    scoreLabel: pulumi.Input<string>;
}