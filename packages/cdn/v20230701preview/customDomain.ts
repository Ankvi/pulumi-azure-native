import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
 */
export class CustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing CustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomDomain {
        return new CustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn/v20230701preview:CustomDomain';

    /**
     * Returns true if the given object is an instance of CustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomDomain.__pulumiType;
    }

    /**
     * Certificate parameters for securing custom HTTPS
     */
    public /*out*/ readonly customHttpsParameters!: pulumi.Output<types.outputs.CdnManagedHttpsParametersResponse | types.outputs.UserManagedHttpsParametersResponse | undefined>;
    /**
     * Provisioning status of the custom domain.
     */
    public /*out*/ readonly customHttpsProvisioningState!: pulumi.Output<string>;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
     */
    public /*out*/ readonly customHttpsProvisioningSubstate!: pulumi.Output<string>;
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    public readonly hostName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning status of Custom Https of the custom domain.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource status of the custom domain.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
     */
    public /*out*/ readonly validationData!: pulumi.Output<string | undefined>;

    /**
     * Create a CustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["customDomainName"] = args ? args.customDomainName : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["customHttpsParameters"] = undefined /*out*/;
            resourceInputs["customHttpsProvisioningState"] = undefined /*out*/;
            resourceInputs["customHttpsProvisioningSubstate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationData"] = undefined /*out*/;
        } else {
            resourceInputs["customHttpsParameters"] = undefined /*out*/;
            resourceInputs["customHttpsProvisioningState"] = undefined /*out*/;
            resourceInputs["customHttpsProvisioningSubstate"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationData"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn:CustomDomain" }, { type: "azure-native:cdn/v20150601:CustomDomain" }, { type: "azure-native:cdn/v20160402:CustomDomain" }, { type: "azure-native:cdn/v20161002:CustomDomain" }, { type: "azure-native:cdn/v20170402:CustomDomain" }, { type: "azure-native:cdn/v20171012:CustomDomain" }, { type: "azure-native:cdn/v20190415:CustomDomain" }, { type: "azure-native:cdn/v20190615:CustomDomain" }, { type: "azure-native:cdn/v20190615preview:CustomDomain" }, { type: "azure-native:cdn/v20191231:CustomDomain" }, { type: "azure-native:cdn/v20200331:CustomDomain" }, { type: "azure-native:cdn/v20200415:CustomDomain" }, { type: "azure-native:cdn/v20200901:CustomDomain" }, { type: "azure-native:cdn/v20210601:CustomDomain" }, { type: "azure-native:cdn/v20220501preview:CustomDomain" }, { type: "azure-native:cdn/v20221101preview:CustomDomain" }, { type: "azure-native:cdn/v20230501:CustomDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomDomain resource.
 */
export interface CustomDomainArgs {
    /**
     * Name of the custom domain within an endpoint.
     */
    customDomainName?: pulumi.Input<string>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    hostName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
