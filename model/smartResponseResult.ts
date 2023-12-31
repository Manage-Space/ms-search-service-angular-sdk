/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SmartResponseCompany } from './smartResponseCompany';
import { SmartFeature } from './smartFeature';
import { SmartResponseContact } from './smartResponseContact';
import { SmartResponseLease } from './smartResponseLease';
import { SmartResponseUnit } from './smartResponseUnit';
import { SmartResponseFilter } from './smartResponseFilter';
import { SmartResponseUnitFeature } from './smartResponseUnitFeature';
import { SmartResponseReservation } from './smartResponseReservation';


/**
 * Result data
 */
/**
 * @type SmartResponseResult
 * Result data
 * @export
 */
export type SmartResponseResult = SmartResponseCompany | SmartResponseContact | SmartResponseFilter | SmartResponseLease | SmartResponseReservation | SmartResponseUnit | SmartResponseUnitFeature;

