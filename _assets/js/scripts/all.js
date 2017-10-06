import Vue from './vue.min.js';
import VeeValidate from 'vee-validate';
import './findIndexPolyfill'
import 'foundation-sites'
import svg4everybody from 'svg4everybody'
import $ from 'jquery';

/* js loading class used for hiding carousel content from foundation before carousel initiation*/
document.body.classList.remove('js-loading')

/* fallback for IE svg images* */
svg4everybody();

$(document).foundation()

/* video page carousel */
import './videos';

/* video modal used on homepage and videos page, along with its tracking code */
import './videos-modal';

/* mobile navigation + desktop/mobile stay informed navigation form opening */
import './nav';

/* showing back to top button when scrolling up in mobile */
import './back-to-top';

/* initializes validation for forms */
Vue.use(VeeValidate);

/* Optimists - Index */
if(window.optimistsVar) {

  const optimistVue = new Vue({
    el: '#optimists',
    methods: {
      /*
        setFilterString
       
        - filtering index based on categories
      */
      setFilterString(filterString) {

        /* deselect current expanded value */
        this.selectItem()
        this.expandItem()

        this.optimistsFilter = filterString
      },
      /*
        hashToIndex

        - getting optimist index in current filterred array and calling method for expanding its profile
        - called after hash change
      */
      hashToIndex(hash) {
        // if hash contains value basides #
        if(hash.length > 1) {
          // get the main substring
          const searchId = hash.substring(1);
          // check for mobile, currently done through filter button width
          if(this.optimistFilterElements.list.offsetWidth / this.optimistFilterElements.item.offsetWidth < 2) {
            // call desktop profile expanding method
            this.expandItem(this.optimistsWithSpaces.findIndex(el => el.id === searchId))
          } else {
            // call desktop mobile expanding method
            this.selectItem(this.optimistsWithSpaces.findIndex(el => el.id === searchId))
          }
        }
        return false
      },
      /* 
        pushItemHash

        - set id to be active hash on page
        - triggered by button
      */
      pushItemHash(id) {
        window.location.hash = id
      },
      /*
        selectItem

        - expand item profile in dekstop
        - scroll to expanded item
        - called from hash change
      */
      selectItem(index = -1) {
         const prevIndex = this.selectedOptimist.index
         // if index is minus one profile or same as current item, it is closed, window hash set empty, return 0
         if(index  === -1 || index === prevIndex) {

           this.selectedOptimist = {
             index: -1
           }
           history.pushState(null, null, '#');
           return 0
         } 

         // set optimist to current value
          this.selectedOptimist = {
            index
          }
          // scroll to optimist profile
          // if there is previousValue bigger than current value wait first for profile close animation, then scroll to current index
          if(index > prevIndex) {

            setTimeout(function(){
              $('html, body').animate({scrollTop : $('.optimist-profile').offset().top},500);
            }, 1050)
          } else {

            setTimeout(function(){

              $('html, body').animate({scrollTop : $('.optimist-profile').offset().top},800);
            }, 50)
          }

          return 1
       

      },
      /*
        expandItem

        - expand item profile in mobile
        - called from hash change
      */

      expandItem(index = -1) {

        const prevIndex = this.expandedOptimist.index

         // if index is minus one profile or same as current item, it is closed, window hash set empty, return 0
        if(index  === -1 || index === prevIndex) {

          this.expandedOptimist = {
            index: -1
          }
          history.pushState(null, null, '#');
          return 0
        } 

         // set optimist to current value
         this.expandedOptimist = {
           index
         }

         return 1
      },

      /*
        expandItemFirst 

        - expand item profile in mobile
        - scroll to expanded item
        - called on first page load ( different scroll behaviour for mobile )
      */
      expandItemFirst(index = -1) {

        const prevIndex = this.expandedOptimist.index

        // if index is minus one profile or same as current item, it is closed, window hash set empty, return 0
        if(index  === -1 || index === prevIndex) {

          this.expandedOptimist = {
            index: -1
          }
          history.pushState(null, null, '#');
          return 0
        } 


        // set optimist to current value
        this.expandedOptimist = {
         index
        }

        // scroll to optimist profile
        // if there is previousValue bigger than current value wait first for profile close animation, then scroll to current index
        if(index > prevIndex) {

         setTimeout(function(){
           $('html, body').animate({scrollTop : $('.optimists-tile__full-bio__inner').offset().top},500);
         }, 1050)
        } else {

         setTimeout(function(){

           $('html, body').animate({scrollTop : $('.optimists-tile__full-bio__inner').offset().top},800);
         }, 50)
        }

        return 1
      },
      /*
        hashToIndex

        - getting optimist index in current filterred array and calling method for expanding its profile
        - called after hash change
        - called on first page load ( different scroll behaviour for mobile )
      */
      hashToIndexFirst(hash) {

        if(hash.length > 1) {
          const searchId = hash.substring(1);
          if(this.optimistFilterElements.list.offsetWidth / this.optimistFilterElements.item.offsetWidth < 2) {
            this.expandItemFirst(this.optimistsWithSpaces.findIndex(el => el.id === searchId))
          } else {
            this.selectItem(this.optimistsWithSpaces.findIndex(el => el.id === searchId))
          }
        }
        return false
      }
    },
    mounted() {
      // set filter elements items as variables, later used for check if page is in mobile layout or desktop
      this.optimistFilterElements.list = document.querySelector('.optimists-filter__options');
      this.optimistFilterElements.item = document.querySelector('.optimists-filter__button');

      // call hashToIndexFirst, checks if there is a profile hash used in address, if so opens profile and scrolls to it
      this.hashToIndexFirst(window.location.hash)

      // add listener for future address hash changes, used to open profiles
      window.addEventListener('hashchange',() => this.hashToIndex(window.location.hash))
    },
    computed: {
      // optimists - optimist array after filtering values based on current active filter
      optimists() {
        return this.optimistsVar.filter(el => {
          let isFiltered = 0;
          if(this.optimistsFilter === '' ) {
            return el
          } else {
            return el.section.findIndex(elInner => elInner === this.optimistsFilter) > -1

          }
        })
      },
      // optimistsWithSpaces - optimists array coppied and added "spaces", "spaces" are values with negative indicex, they are used in array for placing expanded profiles correctly after the full row in desktop
      optimistsWithSpaces() {
        
        var returnArr = [...this.optimists]
        var rows = Math.ceil(this.optimists.length/4)

        var high = 0;
        var low = 0;
        /// high = 3, low =
        for (var i = 0; i < rows; i++) {

          returnArr.splice(((i+1) * 4) + i, 0, {orderId: -1 * i - 10});
        };

        return returnArr
      }
    },
    data() {
      return {
        // optimistVar - current array of optimists generated by jekyll - map used to add index for each value, which is used as a unique key for animating filter change
        optimistsVar: window.optimistsVar.map((el, index) => { el['orderId'] = index; return el }),
        // selectedOptimist - current expanded profile if in desktop
        selectedOptimist: {
          index: -1
        },
        // selectedOptimist - current expanded profile if in mobile
        expandedOptimist: {
          index: - 1
        },
        // active filter
        optimistsFilter: '',
        // filter selection expanded in mobile
        optimistFilterExpanded: false,
        // filter html nodes, they are assigned on component mount and used to check for mobile layout
        optimistFilterElements: {
          list: null,
          item: null
        }
      }
    }
  })
}




/* Stay Informed Form - navigation */
if(document.querySelector('#stay-informed')) {
  const stayInformedVue = new Vue({
    el: '#stay-informed',
    data() {
      return {
        // bruinName - used for radio buttons to avoid duplicate id/label sets
        bruinName: 'IsBruin',

        // values based for sign up form post request
        IsBruin: '-1',
        email: '',
        firstName: '',
        lastName: '',
        degree: '',
        gradYear: '',
        gradLastName: '',

        // formSuccess - used for triggering success screen after form submit
        formSuccess: false
      }
    },
    methods: {
      /*
        submit

        - attempt to submit form
        - triggerd on button click
      */
      submit() {
        // check for fields validity
        this.$validator.validateAll().then((result) => {
          // if valid send form to server
          if (result) {
            console.log('From Submitted!');
            this.formSuccess = true // triggers success screen by default
            $.ajax({
              type: "POST",
              url: '/form-proxy.php',
              data: $('#stay-informed #sign-up-details').serialize(),

            }).fail(function() {
              this.formSuccess = false // if form send action failed, hide success screen
            });

            return;
          }

          
          console.log('Form not submitted - errors!');
        });

      }
    }
  })
}


/* Stay Informed Form - call to action modal */
if(document.querySelector('#stay-informed-cta')) {
  const stayInformedCta = new Vue({
        el: '#stay-informed-cta',
        
        methods: {
          /*
            submit

            - attempt to submit form
            - triggerd on button click
          */
          submit() {

            // check for fields validity
            this.$validator.validateAll().then((result) => {
              // if valid send form to server
              if (result) {
                
                this.formSuccess = true // triggers success screen by default
                console.log('From Submitted!');
                $.ajax({
                  type: "POST",
                  url: '/form-proxy.php',
                  data: $('#stay-informed-cta #sign-up-details').serialize(),

                }).fail(function() {
                  this.formSuccess = false // if form send action failed, hide success screen
                });

                return;
              }

              
              console.log('Form not submitted - errors!');
            });

          }
        },
        data() {
          return {
            // bruinName - used for radio buttons to avoid duplicate id/label sets
            bruinName: 'isBruinBottom',

            // values based for sign up form post request
            IsBruin: '-1',
            email: '',
            firstName: '',
            lastName: '',
            degree: '',
            gradYear: '',
            gradLastName: '',

            // formSuccess - used for triggering success screen after form submit
            formSuccess: false,
            // modalOpen - used for determining if stay informed modal is opened
            modalOpen: false
          }
        }
      })
}