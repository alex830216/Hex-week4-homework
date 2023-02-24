export default {
  // 用 props 的 getProducts 觸發外層方法 getData
  props: ["pages", "getProducts"],
  // template: `
  //   <nav aria-label="Page navigation example">
  //     <ul class="pagination">
  //       <li class="page-item"
  //         :class="{ disabled: !pages.has_pre }">
  //         <a class="page-link" href="#" aria-label="Previous"
  //           @click.prevent="getProducts(pages.current_page - 1)">
  //           <span aria-hidden="true">&laquo;</span>
  //         </a>
  //       </li>

  //       <li class="page-item"
  //         :class="{ active: page === pages.current_page }"
  //         v-for="page in pages.total_pages" :key="page + 'page'">
  //         <a class="page-link" href="#"
  //           @click.prevent="getProducts(page)">
  //           {{ page }}
  //         </a>
  //       </li>

  //       <li class="page-item"
  //         :class="{ disabled: !pages.has_next }">
  //         <a class="page-link" href="#" aria-label="Next"
  //           @click.prevent="getProducts(pages.current_page + 1)">
  //           <span aria-hidden="true">&raquo;</span>
  //         </a>
  //       </li>
  //     </ul>
  //   </nav>`,

  // emit 寫法:
  template: `
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"
          :class="{ disabled: !pages.has_pre }">
          <a class="page-link" href="#" aria-label="Previous"
            @click.prevent="$emit('change-page', pages.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li class="page-item"
          :class="{ active: page === pages.current_page }"
          v-for="page in pages.total_pages" :key="page + 'page'">
          <a class="page-link" href="#"
            @click.prevent="$emit('change-page', page)">
            {{ page }}
          </a>
        </li>
        
        <li class="page-item"
          :class="{ disabled: !pages.has_next }">
          <a class="page-link" href="#" aria-label="Next"
            @click.prevent="$emit('change-page', pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>`,
};
