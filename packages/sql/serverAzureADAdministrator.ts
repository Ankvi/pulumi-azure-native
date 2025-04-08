import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Active Directory administrator.
 *
 * Uses Azure REST API version 2021-11-01. In version 1.x of the Azure Native provider, it used API version 2020-11-01-preview.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
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
    public static readonly __pulumiType = 'azure-native:sql:ServerAzureADAdministrator';

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
     * Type of the sever administrator.
     */
    public readonly administratorType!: pulumi.Output<string>;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    public /*out*/ readonly azureADOnlyAuthentication!: pulumi.Output<boolean>;
    /**
     * Login name of the server administrator.
     */
    public readonly login!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * SID (object ID) of the server administrator.
     */
    public readonly sid!: pulumi.Output<string>;
    /**
     * Tenant ID of the administrator.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
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
            resourceInputs["administratorName"] = args ? args.administratorName : undefined;
            resourceInputs["administratorType"] = args ? args.administratorType : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sid"] = args ? args.sid : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["azureADOnlyAuthentication"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorType"] = undefined /*out*/;
            resourceInputs["azureADOnlyAuthentication"] = undefined /*out*/;
            resourceInputs["login"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sid"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20140401:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20180601preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20190601preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20200202preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20200801preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20201101preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20210201preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20210501preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20210801preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20211101:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20211101preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20220201preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20220501preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20220801preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20221101preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20230201preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20230501preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20230801:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20230801preview:ServerAzureADAdministrator" }, { type: "azure-native:sql/v20240501preview:ServerAzureADAdministrator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerAzureADAdministrator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerAzureADAdministrator resource.
 */
export interface ServerAzureADAdministratorArgs {
    /**
     * The name of server active directory administrator.
     */
    administratorName?: pulumi.Input<string>;
    /**
     * Type of the sever administrator.
     */
    administratorType: pulumi.Input<string | types.enums.AdministratorType>;
    /**
     * Login name of the server administrator.
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
     * SID (object ID) of the server administrator.
     */
    sid: pulumi.Input<string>;
    /**
     * Tenant ID of the administrator.
     */
    tenantId?: pulumi.Input<string>;
}