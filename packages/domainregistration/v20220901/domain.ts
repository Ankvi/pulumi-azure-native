import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about a domain.
 */
export class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Domain {
        return new Domain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:domainregistration/v20220901:Domain';

    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Domain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Domain.__pulumiType;
    }

    public readonly authCode!: pulumi.Output<string | undefined>;
    /**
     * <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
     */
    public readonly autoRenew!: pulumi.Output<boolean | undefined>;
    /**
     * Domain creation timestamp.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * Current DNS type
     */
    public readonly dnsType!: pulumi.Output<string | undefined>;
    /**
     * Azure DNS Zone to use
     */
    public readonly dnsZoneId!: pulumi.Output<string | undefined>;
    /**
     * Reasons why domain is not renewable.
     */
    public /*out*/ readonly domainNotRenewableReasons!: pulumi.Output<string[]>;
    /**
     * Domain expiration timestamp.
     */
    public /*out*/ readonly expirationTime!: pulumi.Output<string>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Timestamp when the domain was renewed last time.
     */
    public /*out*/ readonly lastRenewedTime!: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * All hostnames derived from the domain and assigned to Azure resources.
     */
    public /*out*/ readonly managedHostNames!: pulumi.Output<types.outputs.HostNameResponse[]>;
    /**
     * Resource Name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Name servers.
     */
    public /*out*/ readonly nameServers!: pulumi.Output<string[]>;
    /**
     * <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
     */
    public readonly privacy!: pulumi.Output<boolean | undefined>;
    /**
     * Domain provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and 
     *  it is hosted on name servers Azure has programmatic access to.
     */
    public /*out*/ readonly readyForDnsRecordManagement!: pulumi.Output<boolean>;
    /**
     * Domain registration status.
     */
    public /*out*/ readonly registrationStatus!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Target DNS type (would be used for migration)
     */
    public readonly targetDnsType!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.consent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consent'");
            }
            if ((!args || args.contactAdmin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactAdmin'");
            }
            if ((!args || args.contactBilling === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactBilling'");
            }
            if ((!args || args.contactRegistrant === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactRegistrant'");
            }
            if ((!args || args.contactTech === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactTech'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authCode"] = args ? args.authCode : undefined;
            resourceInputs["autoRenew"] = (args ? args.autoRenew : undefined) ?? true;
            resourceInputs["consent"] = args ? args.consent : undefined;
            resourceInputs["contactAdmin"] = args ? args.contactAdmin : undefined;
            resourceInputs["contactBilling"] = args ? args.contactBilling : undefined;
            resourceInputs["contactRegistrant"] = args ? args.contactRegistrant : undefined;
            resourceInputs["contactTech"] = args ? args.contactTech : undefined;
            resourceInputs["dnsType"] = args ? args.dnsType : undefined;
            resourceInputs["dnsZoneId"] = args ? args.dnsZoneId : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privacy"] = args ? args.privacy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetDnsType"] = args ? args.targetDnsType : undefined;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["domainNotRenewableReasons"] = undefined /*out*/;
            resourceInputs["expirationTime"] = undefined /*out*/;
            resourceInputs["lastRenewedTime"] = undefined /*out*/;
            resourceInputs["managedHostNames"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nameServers"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["readyForDnsRecordManagement"] = undefined /*out*/;
            resourceInputs["registrationStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authCode"] = undefined /*out*/;
            resourceInputs["autoRenew"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["dnsType"] = undefined /*out*/;
            resourceInputs["dnsZoneId"] = undefined /*out*/;
            resourceInputs["domainNotRenewableReasons"] = undefined /*out*/;
            resourceInputs["expirationTime"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastRenewedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedHostNames"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nameServers"] = undefined /*out*/;
            resourceInputs["privacy"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["readyForDnsRecordManagement"] = undefined /*out*/;
            resourceInputs["registrationStatus"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetDnsType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:domainregistration:Domain" }, { type: "azure-native:domainregistration/v20150401:Domain" }, { type: "azure-native:domainregistration/v20180201:Domain" }, { type: "azure-native:domainregistration/v20190801:Domain" }, { type: "azure-native:domainregistration/v20200601:Domain" }, { type: "azure-native:domainregistration/v20200901:Domain" }, { type: "azure-native:domainregistration/v20201001:Domain" }, { type: "azure-native:domainregistration/v20201201:Domain" }, { type: "azure-native:domainregistration/v20210101:Domain" }, { type: "azure-native:domainregistration/v20210115:Domain" }, { type: "azure-native:domainregistration/v20210201:Domain" }, { type: "azure-native:domainregistration/v20210301:Domain" }, { type: "azure-native:domainregistration/v20220301:Domain" }, { type: "azure-native:domainregistration/v20230101:Domain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Domain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    authCode?: pulumi.Input<string>;
    /**
     * <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * Legal agreement consent.
     */
    consent: pulumi.Input<types.inputs.DomainPurchaseConsentArgs>;
    /**
     * Administrative contact.
     */
    contactAdmin: pulumi.Input<types.inputs.ContactArgs>;
    /**
     * Billing contact.
     */
    contactBilling: pulumi.Input<types.inputs.ContactArgs>;
    /**
     * Registrant contact.
     */
    contactRegistrant: pulumi.Input<types.inputs.ContactArgs>;
    /**
     * Technical contact.
     */
    contactTech: pulumi.Input<types.inputs.ContactArgs>;
    /**
     * Current DNS type
     */
    dnsType?: pulumi.Input<types.enums.DnsType>;
    /**
     * Azure DNS Zone to use
     */
    dnsZoneId?: pulumi.Input<string>;
    /**
     * Name of the domain.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
     */
    privacy?: pulumi.Input<boolean>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Target DNS type (would be used for migration)
     */
    targetDnsType?: pulumi.Input<types.enums.DnsType>;
}
