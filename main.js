
// Spell list

const SPELLS = [
  {id: "adrenaline_button", imageSource: "/Images/adrenaline"},
  {id: "teleportation_button", imageSource: "Images/teleportation"},
  {id: "tactical_retreat_button", imageSource: "/Images/tactical_retreat"},
  {id: "rain_button", imageSource: "/Images/rain"},
  {id: "skin_graft_button", imageSource: "Images/skin_graft"}, 
  {id: "chameleon_cloak_button", imageSource: "/Images/chameleon_cloak"},
  {id: "battle_stomp_button", imageSource: "/Images/battle_stomp"},
  {id: "chain_lightning_button", imageSource: "Images/chain_lightning"},
  {id: "pressure_spike_button", imageSource: "/Images/pressure_spike"},
  {id: "nether_swap_button", imageSource: "/Images/nether_swap"},
  {id: "pyroclastic_eruption_button", imageSource: "Images/pyroclastic_eruption"},
  {id: "acid_spores_button", imageSource: "/Images/acid_spores"},
  {id: "ballistic_shot_button", imageSource: "/Images/ballistic_shot"}, 
  {id: "winter_blast_button", imageSource: "Images/winter_blast"}, 
  {id: "armour_of_frost_button", imageSource: "/Images/armour_of_frost"},
  {id: "grasp_of_the_starved_button", imageSource: "/Images/grasp_of_the_starved"}, 
  {id: "spider_legs_button", imageSource: "Images/spider_legs"}, 
  {id: "master_of_sparks_button", imageSource: "/Images/master_of_sparks"},
  {id: "corpse_explosion_button", imageSource: "/Images/corpse_explosion"}, 
  {id: "mass_corpse_explosion_button", imageSource: "Images/mass_corpse_explosion"}, 
  {id: "cloak_and_dagger_button", imageSource: "/Images/cloak_and_dagger"},
  {id: "backlash_button", imageSource: "/Images/backlash"}, 
  {id: "conjure_incarnate_button", imageSource: "Images/conjure_incarnate"}, 
  {id: "power_infusion_button", imageSource: "/Images/power_infusion"},
  {id: "farsight_infusion_button", imageSource: "/Images/farsight_infusion"}, 
  {id: "soul_mate_button", imageSource: "Images/soul_mate"}, 
  {id: "battering_ram_button", imageSource: "/Images/battering_ram"},
  {id: "bouncing_shield_button", imageSource: "/Images/bouncing_shield"}, 
  {id: "phoenix_dive_button", imageSource: "Images/phoenix_dive"}, 
  {id: "thick_of_the_fight_button", imageSource: "/Images/thick_of_the_fight"},
  {id: "closed_circuit_button", imageSource: "/Images/closed_circuit"}, 
  {id: "superconductor_button", imageSource: "Images/superconductor"}, 
  {id: "vacuum_aura_button", imageSource: "/Images/vacuum_aura"},
  {id: "uncanny_evasion_button", imageSource: "/Images/uncanny_evasion"}, 
  {id: "dust_blast_button", imageSource: "Images/dust_blast"}, 
  {id: "earthquake_button", imageSource: "/Images/earthquake"},
  {id: "impalement_button", imageSource: "/Images/impalement"}, 
  {id: "first_aid_button", imageSource: "Images/first_aid"}, 
  {id: "elemental_arrowheads_button", imageSource: "/Images/elemental_arrowheads"},
  {id: "global_cooling_button", imageSource: "/Images/global_cooling"}, 
  {id: "mosquito_swarm_button", imageSource: "Images/mosquito_swarm"}, 
  {id: "raise_bloated_corpse_button", imageSource: "/Images/raise_bloated_corpse"},
  {id: "raining_blood_button", imageSource: "/Images/raining_blood"}, 
  {id: "medusa_head_button", imageSource: "Images/medusa_head"}, 
  {id: "bull_horns_button", imageSource: "/Images/bull_horns"},
  {id: "tentacle_lash_button", imageSource: "/Images/tentacle_lash"}, 
  {id: "apotheosis_button", imageSource: "Images/apotheosis"}, 
  {id: "laser_ray_button", imageSource: "/Images/laser_ray"},
  {id: "fireball_button", imageSource: "/Images/fireball"}, 
  {id: "haste_button", imageSource: "Images/haste"}, 
  {id: "throw_explosive_trap_button", imageSource: "/Images/throw_explosive_trap"},
  {id: "peace_of_mind_button", imageSource: "/Images/peace_of_mind"}, 
  {id: "chloroform_button", imageSource: "Images/chloroform"}, 
  {id: "mortal_blow_button", imageSource: "/Images/mortal_blow"},
  {id: "shadow_infusion_button", imageSource: "/Images/shadow_infusion"}, 
  {id: "warp_infusion_button", imageSource: "Images/warp_infusion"}, 
  {id: "dominate_mind_button", imageSource: "/Images/dominate_mind"},
  {id: "cursed_electric_infusion_button", imageSource: "/Images/cursed_electric_infusion"}, 
  {id: "acid_infusion_button", imageSource: "Images/acid_infusion"}, 
  {id: "summon_inner_demon_button", imageSource: "/Images/summon_inner_demon"},
  {id: "challenge_button", imageSource: "/Images/challenge"}, 
  {id: "whirlwind_button", imageSource: "Images/whirlwind"}, 
  {id: "smoke_cover_button", imageSource: "/Images/smoke_cover"},
  {id: "dazing_bolt_button", imageSource: "/Images/dazing_bolt"}, 
  {id: "vacuum_touch_button", imageSource: "Images/vacuum_touch"}, 
  {id: "evasive_aura_button", imageSource: "/Images/evasive_aura"},
  {id: "worm_tremor_button", imageSource: "/Images/worm_tremor"}, 
  {id: "throw_dust_button", imageSource: "Images/throw_dust"}, 
  {id: "poison_wave_button", imageSource: "/Images/poison_wave"},
  {id: "venom_coating_buttong", imageSource: "/Images/venom_coating"}, 
  {id: "fortify_button", imageSource: "Images/fortify"}, 
  {id: "living_wall_button", imageSource: "/Images/living_wall"},
  {id: "pin_down_button", imageSource: "/Images/pin_down"}, 
  {id: "barrage_buttong", imageSource: "Images/barrage"}, 
  {id: "ricochet_button", imageSource: "/Images/ricochet"},
  {id: "sky_shot_button", imageSource: "/Images/sky_shot"}, 
  {id: "hail_strike_button", imageSource: "Images/hail_strike"}, 
  {id: "ice_fan_button", imageSource: "/Images/ice_fan"},
  {id: "restoration_button", imageSource: "/Images/restoration"}, 
  {id: "ice_breaker_button", imageSource: "Images/ice_breaker"}, 
  {id: "cleanse_wounds_button", imageSource: "/Images/cleanse_wounds"},
  {id: "mass_cleanse_wounds_button", imageSource: "/Images/mass_cleanse_wounds"}, 
  {id: "living_on_the_edge_button", imageSource: "Images/living_on_the_edge"}, 
  {id: "decaying_touch_button", imageSource: "/Images/decaying_touch"},
  {id: "infect_button", imageSource: "/Images/infect"}, 
  {id: "blood_storm_button", imageSource: "Images/blood_storm"}, 
  {id: "shackles_of_pain_button", imageSource: "/Images/shackles_of_pain"},
  {id: "spread_your_wings_button", imageSource: "/Images/spread_your_wings"}, 
  {id: "forced_exchange_button", imageSource: "Images/forced_exchange"}, 
  {id: "heart_of_steel_button", imageSource: "/Images/heart_of_steel"},
  {id: "ignition_button", imageSource: "/Images/ignition"}, 
  {id: "flaming_crescendo_button", imageSource: "Images/flaming_crescendo"}, 
  {id: "epidemic_of_fire_button", imageSource: "/Images/epidemic_of_fire"},
  {id: "supernova_button", imageSource: "/Images/supernova"}, 
  {id: "deploy_mass_traps_button", imageSource: "Images/deploy_mass_traps"}, 
  {id: "sleeping_arms_button", imageSource: "/Images/sleeping_arms"},
  {id: "wind_up_toy_button", imageSource: "/Images/wind_up_toy"}, 
  {id: "rupture_tendons_button", imageSource: "Images/rupture_tendons"}, 
  {id: "necrofire_infusion_button", imageSource: "/Images/necrofire_infusion"},
  {id: "overpower_button", imageSource: "/Images/overpower"}, 
  {id: "enrage_button", imageSource: "Images/enrage"}, 
  {id: "blitz_attack_button", imageSource: "/Images/blitz_attack"},
  {id: "electric_discharge_button", imageSource: "/Images/electric_discharge"}, 
  {id: "blinding_radiance_button", imageSource: "Images/blinding_radiance"}, 
  {id: "shocking_touch_button", imageSource: "/Images/shocking_touch"},
  {id: "contamination_button", imageSource: "/Images/contamination"}, 
  {id: "fossil_strike_button", imageSource: "Images/fossil_strike"}, 
  {id: "poison_dart_button", imageSource: "/Images/poison_dart"},
  {id: "venomous_aura_button", imageSource: "/Images/venomous_aura"}, 
  {id: "turn_to_oil_button", imageSource: "Images/turn_to_oil"}, 
  {id: "mend_metal_button", imageSource: "/Images/mend_metal"},
  {id: "marksmans_fang_button", imageSource: "/Images/marksmans_fang"}, 
  {id: "arrow_storm_button", imageSource: "Images/arrow_storm"}, 
  {id: "deep_freeze_button", imageSource: "/Images/deep_freeze"},
  {id: "soothing_cold_button", imageSource: "/Images/soothing_cold"}, 
  {id: "vampiric_hunger_button", imageSource: "Images/vampiric_hunger"}, 
  {id: "vampiric_hunger_aura_button", imageSource: "/Images/vampiric_hunger_aura"},
  {id: "death_wish_button", imageSource: "/Images/death_wish"}, 
  {id: "blood_sucker_button", imageSource: "Images/blood_sucker"}, 
  {id: "raise_bone_widow_button", imageSource: "/Images/raise_bone_widow"},
  {id: "bone_cage_button", imageSource: "/Images/bone_cage"}, 
  {id: "terrain_transmutation_button", imageSource: "Images/terrain_transmutation"}, 
  {id: "jellyfish_skin_button", imageSource: "/Images/jellyfish_skin"},
  {id: "chicken_claw_button", imageSource: "/Images/chicken_claw"}, 
  {id: "spontaneous_combustion_button", imageSource: "Images/spontaneous_combustion"}, 
  {id: "bleed_fire_button", imageSource: "/Images/bleed_fire"},
  {id: "fire_whip_button", imageSource: "/Images/fire_whip"}, 
  {id: "sparking_swings_button", imageSource: "Images/sparking_swings"}, 
  {id: "terrifying_cruelty_button", imageSource: "/Images/terrifying_cruelty"},
  {id: "throwing_knife_button", imageSource: "/Images/throwing_knife"}, 
  {id: "fan_of_knives_button", imageSource: "Images/fan_of_knives"}, 
  {id: "elemental_totem_button", imageSource: "/Images/elemental_totem"},
  {id: "deflective_barrier_button", imageSource: "/Images/deflective_barrier"}, 
  {id: "crippling_blow_button", imageSource: "Images/crippling_blow"}, 
  {id: "blessed_smoke_cloud_button", imageSource: "/Images/blessed_smoke_cloud"},
  {id: "thunderstorm_button", imageSource: "/Images/thunderstorm"}, 
  {id: "corrosive_touch_button", imageSource: "Images/corrosive_touch"}, 
  {id: "corrosive_spray_button", imageSource: "/Images/corrosive_spray"},
  {id: "assassinate_button", imageSource: "/Images/assassinate"}, 
  {id: "arrow_spray_button", imageSource: "Images/arrow_spray"}, 
  {id: "healing_ritual_button", imageSource: "/Images/healing_ritual"},
  {id: "arcane_stitch_button", imageSource: "/Images/arcane_stitch"}, 
  {id: "cryotherapy_button", imageSource: "Images/cryotherapy"}, 
  {id: "mass_cryotherapy_button", imageSource: "/Images/mass_cryotherapy"},
  {id: "last_rites_button", imageSource: "Images/last_rites"}, 
  {id: "black_shroud_button", imageSource: "/Images/black_shroud"},
  {id: "flay_skin_button", imageSource: "/Images/flay_skin"}, 
  {id: "flaming_skin_button", imageSource: "Images/flaming_skin"}, 
  {id: "icy_skin_button", imageSource: "/Images/icy_skin"},
  {id: "poisonous_skin_button", imageSource: "/Images/poisonous_skin"}, 
  {id: "equalize_button", imageSource: "Images/equalize"}, 
  {id: "searing_daggers_button", imageSource: "/Images/searing_daggers"},
  {id: "summon_fire_slug_button", imageSource: "/Images/summon_fire_slug"}, 
  {id: "meteor_shower_button", imageSource: "Images/meteor_shower"}, 
  {id: "flaming_tongues_button", imageSource: "/Images/flaming_tongues"},
  {id: "corrupted_blade_button", imageSource: "/Images/corrupted_blade"}, 
  {id: "daggers_drawn_button", imageSource: "Images/daggers_drawn"}, 
  {id: "dimensional_bolt_button", imageSource: "/Images/dimensional_bolt"},
  {id: "rallying_cry_button", imageSource: "/Images/rallying_cry"}, 
  {id: "ice_infusion_button", imageSource: "Images/ice_infusion"}, 
  {id: "fire_infusion_button", imageSource: "/Images/fire_infusion"},
  {id: "poison_infusion_button", imageSource: "/Images/poison_infusion"}, 
  {id: "electric_infusion_button", imageSource: "Images/electric_infusion"}, 
  {id: "ethereal_storm_button", imageSource: "/Images/ethereal_storm"},
  {id: "planar_gateway_button", imageSource: "Images/planar_gateway"}, 
  {id: "onslaught_button", imageSource: "/Images/onslaught"},
  {id: "erratic_wisp_button", imageSource: "/Images/erratic_wisp"}, 
  {id: "tornado_button", imageSource: "Images/tornado"}, 
  {id: "vaporise_button", imageSource: "/Images/vaporise"},
  {id: "reactive_armour_button", imageSource: "/Images/reactive_armour"}, 
  {id: "siphon_poison_button", imageSource: "Images/siphon_poison"}, 
  {id: "oily_carapace_button", imageSource: "/Images/oily_carapace"},
  {id: "farsight_button", imageSource: "/Images/farsight"}, 
  {id: "reactive_shot_button", imageSource: "Images/reactive_shot"}, 
  {id: "steam_lance_button", imageSource: "/Images/steam_lance"},
  {id: "cryogenic_stasis_button", imageSource: "/Images/cryogenic_stasis"}, 
  {id: "healing_tears_button", imageSource: "Images/healing_tears"}, 
  {id: "totems_of_the_necromancer_button", imageSource: "/Images/totems_of_the_necromancer"},
  {id: "silencing_stare_button", imageSource: "/Images/silencing_stare"}, 
  {id: "summon_oily_blob_button", imageSource: "Images/summon_oily_blob"}, 
  {id: "firebrand_button", imageSource: "/Images/firebrand"},
  {id: "sabotage_button", imageSource: "/Images/sabotage"}, 
  {id: "mass_sabotage_button", imageSource: "Images/mass_sabotage"}, 
  {id: "gag_order_button", imageSource: "/Images/gag_order"},
  {id: "door_to_eternity_button", imageSource: "/Images/door_to_eternity"},
  {id: "water_infusion_button", imageSource: "/Images/water_infusion"}, 
  {id: "cannibalise_button", imageSource: "Images/cannibalise"}, 
  {id: "guardian_angel_button", imageSource: "/Images/guardian_angel"},
  {id: "favourable_wind_button", imageSource: "/Images/favourable_wind"}, 
  {id: "breathing_bubble_button", imageSource: "Images/breathing_bubble"}, 
  {id: "mass_breathing_bubbles_button", imageSource: "/Images/mass_breathing_bubbles"},
  {id: "apportation_button", imageSource: "/Images/apportation"}, 
  {id: "mass_oily_carapace_button", imageSource: "Images/mass_oily_carapace"},
  {id: "glitter_dust_button", imageSource: "/Images/glitter_dust"}
];




// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var myButton = document.getElementById("adrenalineButton");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");






for(const spell of SPELLS){
  const button = document.getElementById(spell.id)
  const image_source = spell.imageSource
  setModalHandler(button, image_source)
}




function setModalHandler(element, img){
  element.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img + ".png";

    
  }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


modal.onclick = function(){
  modal.style.display = "none";
}




