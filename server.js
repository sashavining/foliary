const plants = [
    {
        "BotanicalName": "Abutilon hybridum",
        "CommonName": "Flowering Maple",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Acalypha hispida",
        "CommonName": "Chenile Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Achimenes hybrids",
        "CommonName": "Magic Flower",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Acorus calamus",
        "CommonName": "Sweet Flag",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Acorus gramineus",
        "CommonName": "Miniature Sweet Flag",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Adiantum raddianum",
        "CommonName": "Maidenhair Fern",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Adromischus cristatus",
        "CommonName": "Crinkle-Leaf Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Adromischus festivus",
        "CommonName": "Plover Eggs",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Aechmea fasciata",
        "CommonName": "Silver Vase",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Aechmea miniata 'Discolor'",
        "CommonName": "Purplish Coral Berry",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Aechmea 'Royal Wine'",
        "CommonName": "Royal Wine Bromeliad",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Aeschynanthus marmoratus",
        "CommonName": "Zebra Basket Vine",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Aeschynanthus pulcher",
        "CommonName": "Lipstick Vine",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Agave Americana 'Marginata'",
        "CommonName": "Variegated Century Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Agave victoriae-reginae",
        "CommonName": "Queen Agave",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Aglaonema modestum",
        "CommonName": "Chinese Evergreen",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Aglaonema 'Silver King'",
        "CommonName": "Silver King",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Aglaonema 'Silver Queen'",
        "CommonName": "Silver Queen",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Allamanda cathartica",
        "CommonName": "Allamanda",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Alloplectus nummularia",
        "CommonName": "Miniature Pouch Flower",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Aloe aborescens",
        "CommonName": "Candelabra Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Aloe barbadensis",
        "CommonName": "Medicine Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Aloe brevifolia",
        "CommonName": "Brevifolia Aloe",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Ananas comosus",
        "CommonName": "Pineapple",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Anthurium clarinervium",
        "CommonName": "Dwarf Crystal Anthurium",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Anthurium hookeri",
        "CommonName": "Bird's Nest Anthurium",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Anthurium scherzeranum",
        "CommonName": "Flamingo Flower",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Aphelandra squarrosa",
        "CommonName": "Zebra Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Araucaria heterophylla",
        "CommonName": "Norfolk Island Pine",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ardissa crenata",
        "CommonName": "Ardisia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Asparagus densiflorus 'Myers'",
        "CommonName": "Plume Asparagus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Asparagus densiflorus 'Sprengeri'",
        "CommonName": "Foxtail Fern",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Asparagus falcatus",
        "CommonName": "Sickle Thorn",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Aspidistra elatior",
        "CommonName": "Cast Iron Plant",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Asplenium daucifolium",
        "CommonName": "Mother Fern",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Asokebuyn budys",
        "CommonName": "Bird's Nest Fern",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Astrophytum myriostigma",
        "CommonName": "Bishop's Cap",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Beaucarnea recurvata",
        "CommonName": "Ponytail",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Begonia cubensis",
        "CommonName": "Cuban Holly",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Begonia metallica",
        "CommonName": "Metallic Leaf Begonia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Begonia x rex-cultorum",
        "CommonName": "Rex Begonia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Begonia semperflorens",
        "CommonName": "Wax Begonia",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Billbergia nutans",
        "CommonName": "Queen's Tears",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Billbergia pyramidalis",
        "CommonName": "Urn Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Billbergia zebrina",
        "CommonName": "Zebra Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Bougainvillea spp.",
        "CommonName": "Bougainvillea",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Brassaia actinophylla",
        "CommonName": "Schefflera",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Brassaia arboricola",
        "CommonName": "Dwarf Schefflera",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Caladium spp.",
        "CommonName": "Caladium",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Calathea insignis",
        "CommonName": "Rattlesnake Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Calathea makoyana",
        "CommonName": "Peacock Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Calathea micans",
        "CommonName": "Miniature Maranta",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Calathea roseopicta",
        "CommonName": "Rose Calathea",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Calceolaria crenatiflora",
        "CommonName": "Slipperwort",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Callisia elegans",
        "CommonName": "Striped Inch Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Carissa grandiflora 'Bonsai'",
        "CommonName": "Bonsai Natal Plum",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures\/Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Carissa grandiflora 'Boxwood Beauty'",
        "CommonName": "Boxwood Beauty",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures\/Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Caryota mitis",
        "CommonName": "Fishtail Palm",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Catharanthus roseus",
        "CommonName": "Madagascar Periwinkle",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Cereus peruvianus",
        "CommonName": "Peruvian Apple Cactus",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures\/Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Ceropegia woodii",
        "CommonName": "Rosary Vine",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Chamaedorea elegans",
        "CommonName": "Parlor Palm",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Chamaedorea erumpens",
        "CommonName": "Bamboo Palm",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Chamaerops humilis",
        "CommonName": "European Fan Palm",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Chirita lavandulacea",
        "CommonName": "Hindustan Gentian",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Chlorophytum comosum 'Variegatum'",
        "CommonName": "Variegated Spider Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Chlorophytum comosum 'Vittatum'",
        "CommonName": "Spider Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Chrysalidocarpus lutescens",
        "CommonName": "Areca Palm",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Chrysanthemum morifolium",
        "CommonName": "Chrysanthemum",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Cissus antarctica",
        "CommonName": "Kangaroo Vine",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Cissus rhombifolia",
        "CommonName": "Grape Leaf Ivy",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Cissus rotundifolia",
        "CommonName": "Wax Cissus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Cissus striata",
        "CommonName": "Miniature Grape Ivy",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Citrofortunella mitis",
        "CommonName": "Calamondin Orange",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Clivia miniata 'Grandiflora'",
        "CommonName": "Bush Lily",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Codiaeum variegatum",
        "CommonName": "Croton",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Coffeaa arabica",
        "CommonName": "Coffee",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Coleus blumeri",
        "CommonName": "Coleus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Colummea hybrids",
        "CommonName": "Goldfish Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Cordyline terminalis",
        "CommonName": "Ti Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Crassula argentea",
        "CommonName": "Jade Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Crassula falcata",
        "CommonName": "Propeller Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Crassula hemisphaerica",
        "CommonName": "Arab's Turban",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Crassula lycopodioides",
        "CommonName": "Toy Cypress",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Crassula schmidtii",
        "CommonName": "Red Flowering Crassula",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Crassula teres",
        "CommonName": "Rattlesnake Tail",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Crossandra infundibuliformis",
        "CommonName": "Crossandra",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Cryptanthus bivittatus 'Minor'",
        "CommonName": "Dwarf Rose Stripe Star",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Cryptanthus fosteranus",
        "CommonName": "Stiff Pheasant Leaf",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Cryptanthus zonatus",
        "CommonName": "Zebra Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Cyrtomium falcatum 'Rochfordianum'",
        "CommonName": "House Holly Fern",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Davallia fejeensis",
        "CommonName": "Rabbit's Foot Fern",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Dieffenbachia 'Exotica Perfection'",
        "CommonName": "Exotica Perfection",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dieffenbachia maculata",
        "CommonName": "Spotted Dumb Cane",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dizygotheca elegantissima",
        "CommonName": "False Aralia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dracaena deremensis 'Janet Craig'",
        "CommonName": "Janet Craig",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dracaena deremensis 'Warneckii'",
        "CommonName": "Warneckii",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dracaena fragrans 'Massangeana'",
        "CommonName": "Corn Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dracaena marginata",
        "CommonName": "Marginata",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dracaena surculosa",
        "CommonName": "Gold Dust Dracaena",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dyckia brevifolia",
        "CommonName": "Miniature Agave",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Dyckia fosterana",
        "CommonName": "Silver and Gold Dyckia",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Echeveria agavoides",
        "CommonName": "Molded Wax",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Echeveria elegans",
        "CommonName": "Mexican Snowball",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Echinocereus reichenbachii",
        "CommonName": "Lace Cactus",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Epidendrum atropurpureum",
        "CommonName": "Spice Orchid",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Orchids"
    },
    {
        "BotanicalName": "Epiphyllum hybrids",
        "CommonName": "Orchid Cacti",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Epipremnum aureum",
        "CommonName": "Golden Pothos",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Epipremnum aureum 'Marble Queen'",
        "CommonName": "Marble Queen Pothos",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Episcia cupreata",
        "CommonName": "Flame Violet",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures\/Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Episcia dianthiflora",
        "CommonName": "Lace-Flower Vine",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures\/Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Episcia reptans",
        "CommonName": "Scarlet Violet",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures\/Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Euphorbia coeralescens",
        "CommonName": "Blue Euphorbia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Euphorbia mammillaris",
        "CommonName": "Corncob Cactus",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Euphorbia milii splendens",
        "CommonName": "Crown-of-Thorns",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Euphorbia pulcherrima",
        "CommonName": "Poinsettia",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Euphorbia tirucalli",
        "CommonName": "Milkbush",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Fatshedera lizei",
        "CommonName": "Botanical Wonder Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Fatsia japonica",
        "CommonName": "Japanese Aralia",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus benjamina",
        "CommonName": "Weeping Fig",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus deltoidea",
        "CommonName": "Mistletoe Ficus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus elastica 'Decora'",
        "CommonName": "Rubber Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures\/Warm: 70°F night, 85°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus lyrata",
        "CommonName": "Fiddle-Leaf Fig",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus pumila 'Minima'",
        "CommonName": "Dwarf Creeping Fig",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus retusa",
        "CommonName": "Cuban Laurel",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus sagittata",
        "CommonName": "Rooting Fig",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ficus willdemaniana",
        "CommonName": "Dwarf Fiddle-Leaf Fig",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Fittonia verschaffeltii",
        "CommonName": "Red-Nerved Fittonia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Fittonia verschaffeltii argyroneura",
        "CommonName": "Silver-Nerved Fittonia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Fuchsia hybrida",
        "CommonName": "Fuchsias",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Gasteria hybrida",
        "CommonName": "Ox Tongue",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Graptopetalum amethystinum",
        "CommonName": "Jewel Leaf Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Guzmania lingulata 'Major'",
        "CommonName": "Scarlet Star",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Guzmania monostachia",
        "CommonName": "Striped Torch",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Gynura aurantiaca 'Purple Passion'",
        "CommonName": "Purple Passion",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Haworthia cuspidata",
        "CommonName": "Star Window Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Haworthia fasciata",
        "CommonName": "Zebra Haworthia",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Haworthia subfasciata",
        "CommonName": "Little Zebra Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Haworthia truncata",
        "CommonName": "Clipped Window Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Hedera canariensis",
        "CommonName": "Algerian Ivy",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Hedera helix",
        "CommonName": "English Ivy",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Hemigraphis alternata",
        "CommonName": "Waffle Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Hibiscus rosa-sinensis",
        "CommonName": "Chinese Hibiscus",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Hippeastrum hybrids",
        "CommonName": "Amaryllis",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Howea belmoreana",
        "CommonName": "Belmore Sentry Palm",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Howea forsterana",
        "CommonName": "Kentia Palm",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Hoya carnosa 'Variegata'",
        "CommonName": "Wax Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Hoya kerrii",
        "CommonName": "Sweetheart Hoya",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Hyacinthus orientalis",
        "CommonName": "Hyacinth",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Impatiens wallerana 'Variegata'",
        "CommonName": "Busy Lizzie Impatiens",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Ixora coccinea",
        "CommonName": "Ixora",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Jatropha integerrima",
        "CommonName": "Peregrian",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Justicia brandegeana",
        "CommonName": "Shrimp Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Kalanchoe blossfeldiana",
        "CommonName": "Christmas Kalanchoe",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Kalanchoe pumila",
        "CommonName": "Dwarf Purple Kalanchoe",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Kalanchoe tomentosa",
        "CommonName": "Panda Plant",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Malvaviscus arboreus",
        "CommonName": "Turk's Cap",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Mammillaria bocasana",
        "CommonName": "Powder Puff",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Manettia inflata",
        "CommonName": "Firecracker Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Maranta leuconeura erythroneura",
        "CommonName": "Red Nerve Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Maranta leuconeura kerchoviana",
        "CommonName": "Prayer Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Mikania ternata",
        "CommonName": "Plush Vine",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Monstera deliciosa",
        "CommonName": "Philodendron Pertusum",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Monstera obliqua",
        "CommonName": "Window Leaf",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Nautilocalyx lynchii",
        "CommonName": "Black Alloplectus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Neoregelia carolinae 'Tricolor'",
        "CommonName": "Tricolor Bromeliad",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Neoregelia spectabilis",
        "CommonName": "Fingernail Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Neoregelia zonata",
        "CommonName": "Zonata",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Nephrolepis exaltata 'Bostoniensis'",
        "CommonName": "Boston Fern",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Nephrolepis exaltata 'Fluffy Ruffles'",
        "CommonName": "Fluffy Ruffles",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Nidularium innocentii nana",
        "CommonName": "Miniature Bird's Nest",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Opuntia vilis",
        "CommonName": "Little Tree Cactus",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Opuntia vulgaris",
        "CommonName": "Irish Mittens",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Oxalis flava",
        "CommonName": "Finger Oxalis",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Oxalis rubra",
        "CommonName": "Red Oxalis",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Pachyphytum oviferum",
        "CommonName": "Pearly Moonstones",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Pachystachys lutea",
        "CommonName": "Yellow Shrimp Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Paphiopedilum hybrids",
        "CommonName": "Ladyslipper Orchids",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist\/Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Orchids"
    },
    {
        "BotanicalName": "Pedilanthus tithymaloides 'Variegatus'",
        "CommonName": "Devil's Backbone",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Pelargonium hortorum",
        "CommonName": "House Geranium",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Pelargoniium peltatum",
        "CommonName": "Ivy Geranium",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Pellaea rotundifolia",
        "CommonName": "Button Fern",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist\/Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Pellionia pulchra",
        "CommonName": "Satin Pellionia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist\/Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Pentas lanceolata",
        "CommonName": "Egyptian Star Cluster",
        "Light": "Sunny light areas: At least 4 hours of direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Peperomia caperata",
        "CommonName": "Emerald Ripple",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Peperomia crassifolia",
        "CommonName": "Leather Peperomia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Peperomia obtusifolia",
        "CommonName": "Baby Rubber Tree",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Philodendron bipennifolium",
        "CommonName": "Fiddle-Leaf Philodendron",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Philodendron 'Emerald Queen'",
        "CommonName": "Emerald Queen",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Philodendron 'Florida'",
        "CommonName": "Florida",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Philodendron scandens oxycardium",
        "CommonName": "Heart-Leaf Philodendron",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Philodendron selloum",
        "CommonName": "Selloum",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Phoenix roebelenii",
        "CommonName": "Pigmy Date Palm",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Pilea cadierei",
        "CommonName": "Aluminum Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Pilea microphylla",
        "CommonName": "Artillery Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Platycerium bifurcatum",
        "CommonName": "Staghorn Fern",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Ferms"
    },
    {
        "BotanicalName": "Plectranthus australis",
        "CommonName": "Swedish Ivy",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Plectranthus australis",
        "CommonName": "Candle Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Podocarpus macrophyllus",
        "CommonName": "Podocarpus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Polyscias balfouriana 'Marginata'",
        "CommonName": "Variegated Balfour Aralia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Polyscias fruticosa",
        "CommonName": "Ming Aralia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Rhapis excelsa",
        "CommonName": "Lady Palm",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Rhododendron hybrids",
        "CommonName": "Azaleas",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Ruellia graeciznas",
        "CommonName": "Red-Spray Ruellia",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Flowering house plants"
    },
    {
        "BotanicalName": "Saintpaulia hybrids",
        "CommonName": "African Violet",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Sansevieria parva",
        "CommonName": "Parva Sansevieria",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Sansevieria trifasciata 'Hahnii'",
        "CommonName": "Birdsnest Sansevieria",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Sansevieria trifasciata 'Laurentii'",
        "CommonName": "Gold-Banded Sansevieria",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Saxifraga stolonifera",
        "CommonName": "Strawberry Geranium",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Schlumbergera bridgesii",
        "CommonName": "Christmas Cactus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Schlumbergera truncata",
        "CommonName": "Christmas Cactus",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Scindapsus pictus",
        "CommonName": "Silver Pothos",
        "Light": "Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Sedum spectabile",
        "CommonName": "Showy Sedum",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Sempervivum arachniodeum",
        "CommonName": "Cow Web Houseleek",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Setcreasea pallida 'Purple Heart'",
        "CommonName": "Purple Heart",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Sinningia speciosa",
        "CommonName": "Gloxinia",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Soleirolia soleirolii",
        "CommonName": "Baby Tears",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "High: 50% or higher\/Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Spathiphyllum 'Clevelandii'",
        "CommonName": "Peace Lily",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Spathiphyllum 'Mauna Loa'",
        "CommonName": "Mauna Loa",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Keep soil mix moist",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Stapelia nobilis",
        "CommonName": "Carrion Flower",
        "Light": "Sunny light areas: At least 4 hours of direct sun\/High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%\/Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering\/Soil mix can become moderately dry before re-watering",
        "SuggestedSoilMix": "Succulents and cacti"
    },
    {
        "BotanicalName": "Streptocarpus x hybridus",
        "CommonName": "Cape Primrose",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "African violets and other Gesneriads"
    },
    {
        "BotanicalName": "Strobilanthes dyeranum",
        "CommonName": "Persian Shield",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Syngonium podophyllum",
        "CommonName": "Nephthytis",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c\/Low-light areas: 25 ft-c to 75 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Trillandsia bulbosa",
        "CommonName": "Dancing Bulb",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Tillandsia lindenii",
        "CommonName": "Blue-Flowered Torch",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Tolmiea menziesii",
        "CommonName": "Piggyback Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Cool: 50°F night, 65°F day temperatures\/Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Tradescantia blossfeldiana",
        "CommonName": "Flowering Inch Plant",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Tradescantia sillamontana",
        "CommonName": "White Velvet",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Vriesea splendens",
        "CommonName": "Flaming Sword",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Bromeliads"
    },
    {
        "BotanicalName": "Yucca elephantipes",
        "CommonName": "Spineless Yucca",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Low: 5% to 24%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    },
    {
        "BotanicalName": "Zebrina pendula",
        "CommonName": "Wandering Jewel",
        "Light": "High-light areas: Over 200 ft-c, but not direct sun\/Medium-light areas: 75 ft-c to 200 ft-c",
        "Temperature": "Average: 65°F night, 75°F day temperatures",
        "RelativeHumidity": "Average: 25% to 49%",
        "Water": "Surface of soil mix should dry before re-watering",
        "SuggestedSoilMix": "Foliage plants"
    }
]

const { response } = require('express');
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');  
})

app.get('/api', (req, res) => {
    res.json(plants)
})

app.get('/api/:name', (req, res) => {
    const plantName = req.params.name.toLowerCase();
    const matchingPlants = [...plants.filter(x => x.BotanicalName.toLowerCase().includes(plantName)), ...plants.filter(x => x.CommonName.toLowerCase().includes(plantName))]
    if (matchingPlants) {
        return res.json(matchingPlants)
    } else {
        res.statusMessage = "Tea not found!"
        res.status(400).end()
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}. Go catch it`)
})