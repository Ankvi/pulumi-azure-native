import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Threat intelligence information object.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2019-01-01-preview.
 *
 * Other available API versions: 2021-04-01, 2021-09-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview.
 */
export class ThreatIntelligenceIndicator extends pulumi.CustomResource {
    /**
     * Get an existing ThreatIntelligenceIndicator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ThreatIntelligenceIndicator {
        return new ThreatIntelligenceIndicator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:ThreatIntelligenceIndicator';

    /**
     * Returns true if the given object is an instance of ThreatIntelligenceIndicator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ThreatIntelligenceIndicator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ThreatIntelligenceIndicator.__pulumiType;
    }

    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the entity.
     */
    public readonly kind!: pulumi.Output<string>;
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
     * Create a ThreatIntelligenceIndicator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ThreatIntelligenceIndicatorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["confidence"] = args ? args.confidence : undefined;
            resourceInputs["created"] = args ? args.created : undefined;
            resourceInputs["createdByRef"] = args ? args.createdByRef : undefined;
            resourceInputs["defanged"] = args ? args.defanged : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["extensions"] = args ? args.extensions : undefined;
            resourceInputs["externalId"] = args ? args.externalId : undefined;
            resourceInputs["externalLastUpdatedTimeUtc"] = args ? args.externalLastUpdatedTimeUtc : undefined;
            resourceInputs["externalReferences"] = args ? args.externalReferences : undefined;
            resourceInputs["granularMarkings"] = args ? args.granularMarkings : undefined;
            resourceInputs["indicatorTypes"] = args ? args.indicatorTypes : undefined;
            resourceInputs["killChainPhases"] = args ? args.killChainPhases : undefined;
            resourceInputs["kind"] = "indicator";
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["language"] = args ? args.language : undefined;
            resourceInputs["lastUpdatedTimeUtc"] = args ? args.lastUpdatedTimeUtc : undefined;
            resourceInputs["modified"] = args ? args.modified : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectMarkingRefs"] = args ? args.objectMarkingRefs : undefined;
            resourceInputs["parsedPattern"] = args ? args.parsedPattern : undefined;
            resourceInputs["pattern"] = args ? args.pattern : undefined;
            resourceInputs["patternType"] = args ? args.patternType : undefined;
            resourceInputs["patternVersion"] = args ? args.patternVersion : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["revoked"] = args ? args.revoked : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["threatIntelligenceTags"] = args ? args.threatIntelligenceTags : undefined;
            resourceInputs["threatTypes"] = args ? args.threatTypes : undefined;
            resourceInputs["validFrom"] = args ? args.validFrom : undefined;
            resourceInputs["validUntil"] = args ? args.validUntil : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20190101preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20210401:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20210901preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20211001:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20211001preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220101preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220401preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220501preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220601preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220701preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220801:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220801preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20220901preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20221001preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20221101:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20221101preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20221201preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230201:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230201preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230301preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230401preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230501preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230601preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230701preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230801preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20230901preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20231001preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20231101:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20231201preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20240101preview:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20240301:ThreatIntelligenceIndicator" }, { type: "azure-native:securityinsights/v20240401preview:ThreatIntelligenceIndicator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ThreatIntelligenceIndicator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ThreatIntelligenceIndicator resource.
 */
export interface ThreatIntelligenceIndicatorArgs {
    /**
     * Confidence of threat intelligence entity
     */
    confidence?: pulumi.Input<number>;
    /**
     * Created by
     */
    created?: pulumi.Input<string>;
    /**
     * Created by reference of threat intelligence entity
     */
    createdByRef?: pulumi.Input<string>;
    /**
     * Is threat intelligence entity defanged
     */
    defanged?: pulumi.Input<boolean>;
    /**
     * Description of a threat intelligence entity
     */
    description?: pulumi.Input<string>;
    /**
     * Display name of a threat intelligence entity
     */
    displayName?: pulumi.Input<string>;
    /**
     * Extensions map
     */
    extensions?: any;
    /**
     * External ID of threat intelligence entity
     */
    externalId?: pulumi.Input<string>;
    /**
     * External last updated time in UTC
     */
    externalLastUpdatedTimeUtc?: pulumi.Input<string>;
    /**
     * External References
     */
    externalReferences?: pulumi.Input<pulumi.Input<types.inputs.ThreatIntelligenceExternalReferenceArgs>[]>;
    /**
     * Granular Markings
     */
    granularMarkings?: pulumi.Input<pulumi.Input<types.inputs.ThreatIntelligenceGranularMarkingModelArgs>[]>;
    /**
     * Indicator types of threat intelligence entities
     */
    indicatorTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kill chain phases
     */
    killChainPhases?: pulumi.Input<pulumi.Input<types.inputs.ThreatIntelligenceKillChainPhaseArgs>[]>;
    /**
     * The kind of the threat intelligence entity
     * Expected value is 'indicator'.
     */
    kind: pulumi.Input<"indicator">;
    /**
     * Labels  of threat intelligence entity
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Language of threat intelligence entity
     */
    language?: pulumi.Input<string>;
    /**
     * Last updated time in UTC
     */
    lastUpdatedTimeUtc?: pulumi.Input<string>;
    /**
     * Modified by
     */
    modified?: pulumi.Input<string>;
    /**
     * Threat intelligence indicator name field.
     */
    name?: pulumi.Input<string>;
    /**
     * Threat intelligence entity object marking references
     */
    objectMarkingRefs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Parsed patterns
     */
    parsedPattern?: pulumi.Input<pulumi.Input<types.inputs.ThreatIntelligenceParsedPatternArgs>[]>;
    /**
     * Pattern of a threat intelligence entity
     */
    pattern?: pulumi.Input<string>;
    /**
     * Pattern type of a threat intelligence entity
     */
    patternType?: pulumi.Input<string>;
    /**
     * Pattern version of a threat intelligence entity
     */
    patternVersion?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Is threat intelligence entity revoked
     */
    revoked?: pulumi.Input<boolean>;
    /**
     * Source of a threat intelligence entity
     */
    source?: pulumi.Input<string>;
    /**
     * List of tags
     */
    threatIntelligenceTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threat types
     */
    threatTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Valid from
     */
    validFrom?: pulumi.Input<string>;
    /**
     * Valid until
     */
    validUntil?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}