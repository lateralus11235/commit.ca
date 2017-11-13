<template>
  <section class="what-we-offer">
    <div class="reef"></div>

    <div class="container">
      <div class="row">
        <div class="column medium-6 medium-offset-3 what-we-offer__headline">
          <h3>
             As a business or IT executive, communicating and achieving outcomes isn't easy. It takes hard work, specific skills, and capabilities to ensure success. Communicating IT can help you through your journey.
          </h3>
        </div>
      </div>
      <div class="row what-we-offer__item" v-for="item in items">
        <div class="column large-6 what-we-offer__icon" :class="['what-we-offer__icon--' + item.title.replace(/\s+/g, '').toLowerCase() ]">
          <div class="what-we-offer__icon-inner"></div>
        </div>
        <div class="column large-6 end what-we-offer__desc">
          <h3 class="what-we-offer__header">
            {{item.title}}
          </h3>
          <div class="what-we-offer__text">
            <p>
              {{item.body}}
            </p>
            
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Visioning',
            body: 'How do you determine the right outcomes? Do you forecast based on current trends, or are you willing to consider potential futures to ensure you and your team can quickly adapt to new opportunities? We can help you co-create shared, realistic outcomes that everyone will support and understand.'
          },
          {

            title: 'Systems Thinking',
            body: 'Understanding the big picture has never been more important with today’s pace of change. Through systems mapping, solutions will become less fragile and more grounded in your organization\'s unique structure, culture, and markets. If you have ever said "we had no idea..." when a business solution, policy, or program failed, then systems thinking can dramatically improve your future successes.'
          },
          {

            title: 'Strategy',
            body: 'How we interpret systems will drive how we solve problems to achieve outcomes. Understanding the differences between simple, complicated, complex, and chaotic systems drives unique approaches to solution development. Often, the application of Agile development methods will significantly lower risk and ensure solutions actually deliver value to your customer. We have real, practical experience in applying agile methods to address system complexity.'
          },

          {

            title: 'Design Thinking',
            body: 'Placing your customer at the centre of your visioning or strategic planning activities is critical to success. We leverage proven design thinking methods to ensure that solutions are designed to generate value.'
          },


          {

            title: 'Leadership',
            body: 'Effective leadership starts with the individual. Let us work with your teams to introduce mindfulness and emotional intelligence practices to improve collaboration and enhance team dynamics. We have expertise in developing hands-on leadership training programs or targeted breakaway sessions.'
          },
          {

            title: 'Collaboration',
            body: 'Outcomes can only be realized when your teams collaborate successfully. The legacy silo’ed approach to delivery ensures failure. Communicating IT can work within your teams to bring out their best, and provide facilitation guidance and coaching to ensure long-term continuity.'
          },
          

          

        ]
      }
    }
    
  }
</script>