<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Church</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Address:</label>
                        <input type="text" class="form-control" v-model="newItem.address"/>
                    </div>
                    <div class="form-group">
                        <label>Item City:</label>
                        <input type="text" class="form-control" v-model="newItem.city"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Church"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../config/db';

export default {
  components: {
    name: 'AddItem'
  },
  firebase: {
    items: db.ref('items')
  },
  data() {
    return {
      newItem: {
        name: '',
        address: '',
        city: ''
      }
    };
  },
  methods: {
    addItem() {
      this.$firebaseRefs.items.push({
        name: this.newItem.name,
        address: this.newItem.address,
        city: this.newItem.city
      });
      this.newItem.name = '';
      this.newItem.address = '';
      this.newItem.city = '';
      this.$router.push('/index');
    }
  }
};
</script>
