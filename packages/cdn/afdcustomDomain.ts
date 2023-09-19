import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01
 */
export class AFDCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing AFDCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AFDCustomDomain {
        return new AFDCustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:AFDCustomDomain';

    /**
     * Returns true if the given object is an instance of AFDCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AFDCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AFDCustomDomain.__pulumiType;
    }

    /**
     * Resource reference to the Azure DNS zone
     */
    public readonly azureDnsZone!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
     */
    public /*out*/ readonly domainValidationState!: pulumi.Output<string>;
    /**
     * Key-Value pair representing migration properties for domains.
     */
    public readonly extendedProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The host name of the domain. Must be a domain name.
     */
    public readonly hostName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource reference to the Azure resource where custom domain ownership was prevalidated
     */
    public readonly preValidatedCustomDomainResourceId!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    /**
     * The name of the profile which holds the domain.
     */
    public readonly profileName!: pulumi.Output<string>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
     */
    public readonly tlsSettings!: pulumi.Output<types.outputs.AFDDomainHttpsParametersResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Values the customer needs to validate domain ownership
     */
    public /*out*/ readonly validationProperties!: pulumi.Output<types.outputs.DomainValidationPropertiesResponse>;

    /**
     * Create a AFDCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AFDCustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureDnsZone"] = args ? args.azureDnsZone : undefined;
            resourceInputs["customDomainName"] = args ? args.customDomainName : undefined;
            resourceInputs["extendedProperties"] = args ? args.extendedProperties : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["preValidatedCustomDomainResourceId"] = args ? args.preValidatedCustomDomainResourceId : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tlsSettings"] = args ? args.tlsSettings : undefined;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["domainValidationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationProperties"] = undefined /*out*/;
        } else {
            resourceInputs["azureDnsZone"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["domainValidationState"] = undefined /*out*/;
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["preValidatedCustomDomainResourceId"] = undefined /*out*/;
            resourceInputs["profileName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tlsSettings"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationProperties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20200901:AFDCustomDomain" }, { type: "azure-native:cdn/v20210601:AFDCustomDomain" }, { type: "azure-native:cdn/v20220501preview:AFDCustomDomain" }, { type: "azure-native:cdn/v20221101preview:AFDCustomDomain" }, { type: "azure-native:cdn/v20230501:AFDCustomDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AFDCustomDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AFDCustomDomain resource.
 */
export interface AFDCustomDomainArgs {
    /**
     * Resource reference to the Azure DNS zone
     */
    azureDnsZone?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * Name of the domain under the profile which is unique globally
     */
    customDomainName?: pulumi.Input<string>;
    /**
     * Key-Value pair representing migration properties for domains.
     */
    extendedProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The host name of the domain. Must be a domain name.
     */
    hostName: pulumi.Input<string>;
    /**
     * Resource reference to the Azure resource where custom domain ownership was prevalidated
     */
    preValidatedCustomDomainResourceId?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
     */
    tlsSettings?: pulumi.Input<types.inputs.AFDDomainHttpsParametersArgs>;
}
