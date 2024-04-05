import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An server Active Directory Administrator.
 */
export class ServerAzureADAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing ServerAzureADAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerAzureADAdministrator {
        return new ServerAzureADAdministrator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20140401:ServerAzureADAdministrator';

    /**
     * Returns true if the given object is an instance of ServerAzureADAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerAzureADAdministrator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerAzureADAdministrator.__pulumiType;
    }

    /**
     * The type of administrator.
     */
    public readonly administratorType!: pulumi.Output<string>;
    /**
     * The server administrator login value.
     */
    public readonly login!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The server administrator Sid (Secure ID).
     */
    public readonly sid!: pulumi.Output<string>;
    /**
     * The server Active Directory Administrator tenant id.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerAzureADAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerAzureADAdministratorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.administratorType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'administratorType'");
            }
            if ((!args || args.login === undefined) && !opts.urn) {
                throw new Error("Missing required property 'login'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.sid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sid'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["administratorName"] = args ? args.administratorName : undefined;
            resourceInputs["administratorType"] = args ? args.administratorType : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sid"] = args ? args.sid : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorType"] = undefined /*out*/;
            resourceInputs["login"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sid"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20180601preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20190601preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20200202preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20200801preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20201101preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20210201preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20210501preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20210801preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20211101:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20211101preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20220201preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20220501preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20220801preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20221101preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20230201preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20230501preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20230801preview:ServerAzureADAdministrator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerAzureADAdministrator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerAzureADAdministrator resource.
 */
export interface ServerAzureADAdministratorArgs {
    /**
     * Name of the server administrator resource.
     */
    administratorName?: pulumi.Input<string>;
    /**
     * The type of administrator.
     */
    administratorType: pulumi.Input<string | types.enums.AdministratorType>;
    /**
     * The server administrator login value.
     */
    login: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The server administrator Sid (Secure ID).
     */
    sid: pulumi.Input<string>;
    /**
     * The server Active Directory Administrator tenant id.
     */
    tenantId: pulumi.Input<string>;
}