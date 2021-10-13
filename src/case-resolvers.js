const toNumber =require( "lodash");

const resolvers = {
    Country: {
      deathRate : async (input, args, apis) => {
          if(input.mostRecent &&input.mostRecent.deaths){
              console.log("input",input.mostRecent)
              const populationResult = await apis.Polulation.api.population({country:"China"})
              const population = toNumber(populationResult.populationString)
              const deathRate = input.mostRecent.deaths/population
            //   console.log("deathRate",deathRate)
              return deathRate
          }
        return 0.0
      },
      population: async (input, args, apis) => {
          console.log("input",input.name)
        const result = await apis.Polulation.api.population({country:input.name})
        return toNumber(result.populationString)
      },


    },
  };
  
  module.exports = { resolvers };
  