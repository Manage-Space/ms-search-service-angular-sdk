/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Site } from './site';
import { ObjectType } from './objectType';
import { PricingGroup } from './pricingGroup';
import { UnitDimensions } from './unitDimensions';
import { UnitResponseUnitReservation } from './unitResponseUnitReservation';
import { Position } from './position';
import { Dimension } from './dimension';
import { UnitAttribute } from './unitAttribute';
import { UnitSubscription } from './unitSubscription';


export interface UnitResponse { 
    /**
     * Unique identifier for the unit
     */
    id: string;
    /**
     * Unique identifier for the unit
     */
    unitId: string;
    /**
     * Unique identifier for the site the unit is located at
     */
    siteId: string;
    unitDimensions: UnitDimensions;
    /**
     * Dimensions of the unit(string WxL)
     */
    dimensions: string;
    /**
     * Identifier for the set of dimensions for the unit
     */
    dimensionsSetId: number;
    /**
     * Identifier for the metric system used for the dimensions
     */
    metricId: number;
    geometry: Dimension;
    position: Position;
    /**
     * Rotation of the unit within the site
     */
    rotation: number;
    unitReservation: UnitResponseUnitReservation | null;
    /**
     * List of subscriptions associated with the unit
     */
    unitSubscriptions: Array<UnitSubscription>;
    /**
     * Date and time the unit was created at
     */
    createdAt: string;
    /**
     * Name of the unit
     */
    name: string;
    site: Site;
    /**
     * Identifier for the type of object the unit is
     */
    objectTypeId: number;
    objectType: ObjectType;
    /**
     * Identifier for the pricing group that applies to the unit
     */
    pricingGroupId: string;
    pricingGroup: PricingGroup;
    /**
     * Attributes that describe features, floor, and status of the unit
     */
    unitAttributes: Array<UnitAttribute>;
}

