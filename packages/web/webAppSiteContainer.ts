import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container of a site
 * Azure REST API version: 2023-12-01.
 *
 * Other available API versions: 2024-04-01.
 */
export class WebAppSiteContainer extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSiteContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSiteContainer {
        return new WebAppSiteContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppSiteContainer';

    /**
     * Returns true if the given object is an instance of WebAppSiteContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSiteContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSiteContainer.__pulumiType;
    }

    /**
     * Auth Type
     */
    public readonly authType!: pulumi.Output<string | undefined>;
    /**
     * Created Time
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * List of environment variables
     */
    public readonly environmentVariables!: pulumi.Output<types.outputs.EnvironmentVariableResponse[] | undefined>;
    /**
     * Image Name
     */
    public readonly image!: pulumi.Output<string>;
    /**
     * <code>true</code> if the container is the main site container; <code>false</code> otherwise.
     */
    public readonly isMain!: pulumi.Output<boolean>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Last Modified Time
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password Secret
     */
    public readonly passwordSecret!: pulumi.Output<string | undefined>;
    /**
     * StartUp Command
     */
    public readonly startUpCommand!: pulumi.Output<string | undefined>;
    /**
     * Target Port
     */
    public readonly targetPort!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * UserManagedIdentity ClientId
     */
    public readonly userManagedIdentityClientId!: pulumi.Output<string | undefined>;
    /**
     * User Name
     */
    public readonly userName!: pulumi.Output<string | undefined>;
    /**
     * List of volume mounts
     */
    public readonly volumeMounts!: pulumi.Output<types.outputs.VolumeMountResponse[] | undefined>;

    /**
     * Create a WebAppSiteContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSiteContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.image === undefined) && !opts.urn) {
                throw new Error("Missing required property 'image'");
            }
            if ((!args || args.isMain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isMain'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authType"] = args ? args.authType : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["isMain"] = args ? args.isMain : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passwordSecret"] = args ? args.passwordSecret : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["startUpCommand"] = args ? args.startUpCommand : undefined;
            resourceInputs["targetPort"] = args ? args.targetPort : undefined;
            resourceInputs["userManagedIdentityClientId"] = args ? args.userManagedIdentityClientId : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["volumeMounts"] = args ? args.volumeMounts : undefined;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authType"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["environmentVariables"] = undefined /*out*/;
            resourceInputs["image"] = undefined /*out*/;
            resourceInputs["isMain"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["passwordSecret"] = undefined /*out*/;
            resourceInputs["startUpCommand"] = undefined /*out*/;
            resourceInputs["targetPort"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userManagedIdentityClientId"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
            resourceInputs["volumeMounts"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20231201:WebAppSiteContainer" }, { type: "azure-native:web/v20240401:WebAppSiteContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSiteContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSiteContainer resource.
 */
export interface WebAppSiteContainerArgs {
    /**
     * Auth Type
     */
    authType?: pulumi.Input<types.enums.AuthType>;
    /**
     * Site Container Name
     */
    containerName?: pulumi.Input<string>;
    /**
     * List of environment variables
     */
    environmentVariables?: pulumi.Input<pulumi.Input<types.inputs.EnvironmentVariableArgs>[]>;
    /**
     * Image Name
     */
    image: pulumi.Input<string>;
    /**
     * <code>true</code> if the container is the main site container; <code>false</code> otherwise.
     */
    isMain: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Password Secret
     */
    passwordSecret?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * StartUp Command
     */
    startUpCommand?: pulumi.Input<string>;
    /**
     * Target Port
     */
    targetPort?: pulumi.Input<string>;
    /**
     * UserManagedIdentity ClientId
     */
    userManagedIdentityClientId?: pulumi.Input<string>;
    /**
     * User Name
     */
    userName?: pulumi.Input<string>;
    /**
     * List of volume mounts
     */
    volumeMounts?: pulumi.Input<pulumi.Input<types.inputs.VolumeMountArgs>[]>;
}