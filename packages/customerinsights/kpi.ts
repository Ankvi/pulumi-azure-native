import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The KPI resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 2.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class Kpi extends pulumi.CustomResource {
    /**
     * Get an existing Kpi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Kpi {
        return new Kpi(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:Kpi';

    /**
     * Returns true if the given object is an instance of Kpi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Kpi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Kpi.__pulumiType;
    }

    /**
     * The aliases.
     */
    public readonly aliases!: pulumi.Output<types.outputs.KpiAliasResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The calculation window.
     */
    public readonly calculationWindow!: pulumi.Output<string>;
    /**
     * Name of calculation window field.
     */
    public readonly calculationWindowFieldName!: pulumi.Output<string | undefined>;
    /**
     * Localized description for the KPI.
     */
    public readonly description!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Localized display name for the KPI.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The mapping entity type.
     */
    public readonly entityType!: pulumi.Output<string>;
    /**
     * The mapping entity name.
     */
    public readonly entityTypeName!: pulumi.Output<string>;
    /**
     * The computation expression for the KPI.
     */
    public readonly expression!: pulumi.Output<string>;
    /**
     * The KPI extracts.
     */
    public readonly extracts!: pulumi.Output<types.outputs.KpiExtractResponse[] | undefined>;
    /**
     * The filter expression for the KPI.
     */
    public readonly filter!: pulumi.Output<string | undefined>;
    /**
     * The computation function for the KPI.
     */
    public readonly function!: pulumi.Output<string>;
    /**
     * the group by properties for the KPI.
     */
    public readonly groupBy!: pulumi.Output<string[] | undefined>;
    /**
     * The KPI GroupByMetadata.
     */
    public /*out*/ readonly groupByMetadata!: pulumi.Output<types.outputs.KpiGroupByMetadataResponse[]>;
    /**
     * The KPI name.
     */
    public readonly kpiName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The participant profiles.
     */
    public /*out*/ readonly participantProfilesMetadata!: pulumi.Output<types.outputs.KpiParticipantProfilesMetadataResponse[]>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * The KPI thresholds.
     */
    public readonly thresHolds!: pulumi.Output<types.outputs.KpiThresholdsResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unit of measurement for the KPI.
     */
    public readonly unit!: pulumi.Output<string | undefined>;

    /**
     * Create a Kpi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KpiArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.calculationWindow === undefined) && !opts.urn) {
                throw new Error("Missing required property 'calculationWindow'");
            }
            if ((!args || args.entityType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entityType'");
            }
            if ((!args || args.entityTypeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entityTypeName'");
            }
            if ((!args || args.expression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expression'");
            }
            if ((!args || args.function === undefined) && !opts.urn) {
                throw new Error("Missing required property 'function'");
            }
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aliases"] = args ? args.aliases : undefined;
            resourceInputs["calculationWindow"] = args ? args.calculationWindow : undefined;
            resourceInputs["calculationWindowFieldName"] = args ? args.calculationWindowFieldName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["entityType"] = args ? args.entityType : undefined;
            resourceInputs["entityTypeName"] = args ? args.entityTypeName : undefined;
            resourceInputs["expression"] = args ? args.expression : undefined;
            resourceInputs["extracts"] = args ? args.extracts : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["function"] = args ? args.function : undefined;
            resourceInputs["groupBy"] = args ? args.groupBy : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["kpiName"] = args ? args.kpiName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["thresHolds"] = args ? args.thresHolds : undefined;
            resourceInputs["unit"] = args ? args.unit : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["groupByMetadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["participantProfilesMetadata"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aliases"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["calculationWindow"] = undefined /*out*/;
            resourceInputs["calculationWindowFieldName"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["entityType"] = undefined /*out*/;
            resourceInputs["entityTypeName"] = undefined /*out*/;
            resourceInputs["expression"] = undefined /*out*/;
            resourceInputs["extracts"] = undefined /*out*/;
            resourceInputs["filter"] = undefined /*out*/;
            resourceInputs["function"] = undefined /*out*/;
            resourceInputs["groupBy"] = undefined /*out*/;
            resourceInputs["groupByMetadata"] = undefined /*out*/;
            resourceInputs["kpiName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["participantProfilesMetadata"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["thresHolds"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unit"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:Kpi" }, { type: "azure-native:customerinsights/v20170426:Kpi" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Kpi.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Kpi resource.
 */
export interface KpiArgs {
    /**
     * The aliases.
     */
    aliases?: pulumi.Input<pulumi.Input<types.inputs.KpiAliasArgs>[]>;
    /**
     * The calculation window.
     */
    calculationWindow: pulumi.Input<types.enums.CalculationWindowTypes>;
    /**
     * Name of calculation window field.
     */
    calculationWindowFieldName?: pulumi.Input<string>;
    /**
     * Localized description for the KPI.
     */
    description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Localized display name for the KPI.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The mapping entity type.
     */
    entityType: pulumi.Input<types.enums.EntityTypes>;
    /**
     * The mapping entity name.
     */
    entityTypeName: pulumi.Input<string>;
    /**
     * The computation expression for the KPI.
     */
    expression: pulumi.Input<string>;
    /**
     * The KPI extracts.
     */
    extracts?: pulumi.Input<pulumi.Input<types.inputs.KpiExtractArgs>[]>;
    /**
     * The filter expression for the KPI.
     */
    filter?: pulumi.Input<string>;
    /**
     * The computation function for the KPI.
     */
    function: pulumi.Input<types.enums.KpiFunctions>;
    /**
     * the group by properties for the KPI.
     */
    groupBy?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the KPI.
     */
    kpiName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The KPI thresholds.
     */
    thresHolds?: pulumi.Input<types.inputs.KpiThresholdsArgs>;
    /**
     * The unit of measurement for the KPI.
     */
    unit?: pulumi.Input<string>;
}