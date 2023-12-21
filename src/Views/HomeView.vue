<template>
  <div :style="{ marginLeft: sidebarWidth  }">
    <h1>DashBoard</h1>

    <div class="table-container">
      <table>
        <caption>Chores</caption>
        <tr>
          <td>ChoresID</td>
          <td>Chore Name</td>
          <td>Created By</td>
        </tr>

        <tr v-for="ChoresList in ChoresList" :key="ChoresList.id">
          <td>{{ ChoresList.choreId }}</td>
          <td>{{ ChoresList.choreName }}</td>
          <td>{{ ChoresList.createdBy }}</td>
        </tr>
      </table>
    </div>

    <div class="table-container">
      <table>
        <caption>Expenses</caption>
        <tr>
          <td>Expense ID</td>
          <td>Name</td>
          <td>Description</td>
          <td>Amount</td>
        </tr>
        
        <tr v-for="expenseList in expenseList" :key="expenseList.id">
          <td>{{ expenseList.ExpenseId }}</td>
          <td>{{ expenseList.ExpenseName }}</td>
          <td>{{ expenseList.ExpenseDescription }}</td>
          <td>{{ expenseList.ExpenseAmount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { sidebarWidth } from '../components/sidebar/state'; 

export default {
  name: "HomeView",
  setup() {
    const ChoresList = ref([]);
    const expenseList = ref([]);

    onMounted(() => {
      axios
        .get('http://ec2-54-206-19-34.ap-southeast-2.compute.amazonaws.com/api/Chores/GetAll')
        .then((response) => {
          ChoresList.value = response.data.value;
          console.log('Chores Data:', response.data.value);
        })
        .catch((error) => {
          console.error('Error fetching Chores data:', error);
        });

      axios
        .get('http://ec2-54-206-19-34.ap-southeast-2.compute.amazonaws.com/api/Expense/GetAll')
        .then((response) => {
          expenseList.value = response.data.value;
          console.log('Expenses Data:', response.data.value);
        })
        .catch((error) => {
          console.error('Error fetching Expenses data:', error);
        });
    });

    return {
      ChoresList,
      expenseList,
      sidebarWidth,
    };
  },
};
</script>

<style scoped>
table {
  border: 3px solid black;
  border-collapse: collapse;
  width: 100%;
}

td {
  border: 1px solid black;
  padding: 8px;
}

.table-container {
  margin-left: 25px;
  margin-top: 10px;
  
}

h1{

  color: green;
  margin-left: 50px;
  
}

caption{

text-align: left;
margin-bottom: 5px;

}
</style>
