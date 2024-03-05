import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Authorized groundstation.
 */
export interface AuthorizedGroundstationResponse {
    /**
     * Date of authorization expiration.
     */
    expirationDate: string;
    /**
     * Groundstation name.
     */
    groundStation: string;
}

/**
 * Customer retrieves list of Available Contacts for a spacecraft resource. Later, one of the available contact can be selected to create a contact.
 */
export interface AvailableContactsResponse {
    /**
     * Azimuth of the antenna at the end of the contact in decimal degrees.
     */
    endAzimuthDegrees: number;
    /**
     * Spacecraft elevation above the horizon at contact end.
     */
    endElevationDegrees: number;
    /**
     * Name of Azure Ground Station.
     */
    groundStationName: string;
    /**
     * Maximum elevation of the antenna during the contact in decimal degrees.
     */
    maximumElevationDegrees: number;
    /**
     * Time to lost receiving a signal (ISO 8601 UTC standard).
     */
    rxEndTime: string;
    /**
     * Earliest time to receive a signal (ISO 8601 UTC standard).
     */
    rxStartTime: string;
    /**
     * The reference to the spacecraft resource.
     */
    spacecraft?: AvailableContactsResponseSpacecraft;
    /**
     * Azimuth of the antenna at the start of the contact in decimal degrees.
     */
    startAzimuthDegrees: number;
    /**
     * Spacecraft elevation above the horizon at contact start.
     */
    startElevationDegrees: number;
    /**
     * Time at which antenna transmit will be disabled (ISO 8601 UTC standard).
     */
    txEndTime: string;
    /**
     * Time at which antenna transmit will be enabled (ISO 8601 UTC standard).
     */
    txStartTime: string;
}

/**
 * The reference to the spacecraft resource.
 */
export interface AvailableContactsResponseSpacecraft {
    /**
     * Resource ID.
     */
    id: string;
}

/**
 * Contact Profile Link Channel.
 */
export interface ContactProfileLinkChannelResponse {
    /**
     * Bandwidth in MHz.
     */
    bandwidthMHz: number;
    /**
     * Center Frequency in MHz.
     */
    centerFrequencyMHz: number;
    /**
     * Currently unused.
     */
    decodingConfiguration?: string;
    /**
     * Copy of the modem configuration file such as Kratos QRadio or Kratos QuantumRx. Only valid for downlink directions. If provided, the modem connects to the customer endpoint and sends demodulated data instead of a VITA.49 stream.
     */
    demodulationConfiguration?: string;
    /**
     * Currently unused.
     */
    encodingConfiguration?: string;
    /**
     * Customer end point to store and retrieve data during a contact with the spacecraft.
     */
    endPoint: EndPointResponse;
    /**
     * Copy of the modem configuration file such as Kratos QRadio. Only valid for uplink directions. If provided, the modem connects to the customer endpoint and accepts commands from the customer instead of a VITA.49 stream.
     */
    modulationConfiguration?: string;
    /**
     * Channel name.
     */
    name: string;
}

/**
 * Contact Profile Link.
 */
export interface ContactProfileLinkResponse {
    /**
     * Contact Profile Link Channel.
     */
    channels: ContactProfileLinkChannelResponse[];
    /**
     * Direction (Uplink or Downlink).
     */
    direction: string;
    /**
     * Effective Isotropic Radiated Power (EIRP) in dBW. It is the required EIRP by the customer. Not used yet.
     */
    eirpdBW?: number;
    /**
     * Gain to noise temperature in db/K. It is the required G/T by the customer. Not used yet.
     */
    gainOverTemperature?: number;
    /**
     * Link name.
     */
    name: string;
    /**
     * Polarization. e.g. (RHCP, LHCP).
     */
    polarization: string;
}

/**
 * Contact Profile third-party partner configuration.
 */
export interface ContactProfileThirdPartyConfigurationResponse {
    /**
     * Name of string referencing the configuration describing contact set-up for a particular mission. Expected values are those which have been created in collaboration with the partner network.
     */
    missionConfiguration: string;
    /**
     * Name of the third-party provider.
     */
    providerName: string;
}

/**
 * Network configuration of customer virtual network.
 */
export interface ContactProfilesPropertiesResponseNetworkConfiguration {
    /**
     * ARM resource identifier of the subnet delegated to the Microsoft.Orbital/orbitalGateways. Needs to be at least a class C subnet, and should not have any IP created in it.
     */
    subnetId: string;
}

/**
 * The configuration associated with the allocated antenna.
 */
export interface ContactsPropertiesResponseAntennaConfiguration {
    /**
     * The destination IP a packet can be sent to. This would for example be the TCP endpoint you would send data to.
     */
    destinationIp?: string;
    /**
     * List of Source IP
     */
    sourceIps?: string[];
}

/**
 * The reference to the contact profile resource.
 */
export interface ContactsPropertiesResponseContactProfile {
    /**
     * Resource ID.
     */
    id: string;
}

/**
 * A reference to global communications site.
 */
export interface EdgeSitesPropertiesResponseGlobalCommunicationsSite {
    /**
     * Resource ID.
     */
    id: string;
}

/**
 * Customer end point to store and retrieve data during a contact with the spacecraft.
 */
export interface EndPointResponse {
    /**
     * Name of an end point.
     */
    endPointName: string;
    /**
     * IP Address (IPv4).
     */
    ipAddress: string;
    /**
     * TCP port to listen on to receive data.
     */
    port: string;
    /**
     * Protocol either UDP or TCP.
     */
    protocol: string;
}

/**
 * A reference to global communications site.
 */
export interface GroundStationsPropertiesResponseGlobalCommunicationsSite {
    /**
     * Resource ID.
     */
    id: string;
}

/**
 * A reference to an Microsoft.Orbital/edgeSites resource to route traffic for.
 */
export interface L2ConnectionsPropertiesResponseEdgeSite {
    /**
     * Resource ID.
     */
    id: string;
}

/**
 * A reference to an Microsoft.Orbital/groundStations resource to route traffic for.
 */
export interface L2ConnectionsPropertiesResponseGroundStation {
    /**
     * Resource ID.
     */
    id: string;
}

export interface ResourceIdListResultResponseValue {
    /**
     * The Azure Resource ID.
     */
    id?: string;
}

/**
 * List of authorized spacecraft links per ground station and the expiration date of the authorization.
 */
export interface SpacecraftLinkResponse {
    /**
     * Authorized Ground Stations
     */
    authorizations: AuthorizedGroundstationResponse[];
    /**
     * Bandwidth in MHz.
     */
    bandwidthMHz: number;
    /**
     * Center Frequency in MHz.
     */
    centerFrequencyMHz: number;
    /**
     * Direction (Uplink or Downlink).
     */
    direction: string;
    /**
     * Link name.
     */
    name: string;
    /**
     * Polarization. e.g. (RHCP, LHCP).
     */
    polarization: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}


