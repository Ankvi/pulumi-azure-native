import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class represent an AppComplianceAutomation evidence resource.
 *
 * Uses Azure REST API version 2024-06-27. In version 2.x of the Azure Native provider, it used API version 2024-06-27.
 */
export class Evidence extends pulumi.CustomResource {
    /**
     * Get an existing Evidence resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Evidence {
        return new Evidence(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appcomplianceautomation:Evidence';

    /**
     * Returns true if the given object is an instance of Evidence.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Evidence {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Evidence.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Control id.
     */
    public readonly controlId!: pulumi.Output<string | undefined>;
    /**
     * Evidence type.
     */
    public readonly evidenceType!: pulumi.Output<string | undefined>;
    /**
     * Extra data considered as evidence.
     */
    public readonly extraData!: pulumi.Output<string | undefined>;
    /**
     * The path of the file in storage.
     */
    public readonly filePath!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Responsibility id.
     */
    public readonly responsibilityId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Evidence resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EvidenceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.filePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filePath'");
            }
            if ((!args || args.reportName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reportName'");
            }
            resourceInputs["controlId"] = args ? args.controlId : undefined;
            resourceInputs["evidenceName"] = args ? args.evidenceName : undefined;
            resourceInputs["evidenceType"] = args ? args.evidenceType : undefined;
            resourceInputs["extraData"] = args ? args.extraData : undefined;
            resourceInputs["filePath"] = args ? args.filePath : undefined;
            resourceInputs["offerGuid"] = args ? args.offerGuid : undefined;
            resourceInputs["reportCreatorTenantId"] = args ? args.reportCreatorTenantId : undefined;
            resourceInputs["reportName"] = args ? args.reportName : undefined;
            resourceInputs["responsibilityId"] = args ? args.responsibilityId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["controlId"] = undefined /*out*/;
            resourceInputs["evidenceType"] = undefined /*out*/;
            resourceInputs["extraData"] = undefined /*out*/;
            resourceInputs["filePath"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["responsibilityId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appcomplianceautomation/v20240627:Evidence" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Evidence.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Evidence resource.
 */
export interface EvidenceArgs {
    /**
     * Control id.
     */
    controlId?: pulumi.Input<string>;
    /**
     * The evidence name.
     */
    evidenceName?: pulumi.Input<string>;
    /**
     * Evidence type.
     */
    evidenceType?: pulumi.Input<string | types.enums.EvidenceType>;
    /**
     * Extra data considered as evidence.
     */
    extraData?: pulumi.Input<string>;
    /**
     * The path of the file in storage.
     */
    filePath: pulumi.Input<string>;
    /**
     * The offerGuid which mapping to the reports.
     */
    offerGuid?: pulumi.Input<string>;
    /**
     * The tenant id of the report creator.
     */
    reportCreatorTenantId?: pulumi.Input<string>;
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
    /**
     * Responsibility id.
     */
    responsibilityId?: pulumi.Input<string>;
}