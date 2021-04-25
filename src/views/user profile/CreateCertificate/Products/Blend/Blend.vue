<template>
  <div>
    <form class="base__oil-form">
      <div class="__row1">
        <div class="__one">
          <p>Product</p>
          <Dropdown
            size="small"
            placeholder="Select a product"
            v-model="formData.selectedProduct"
            :options="productsInCategory.map((product) => product.product_name)"
          />
        </div>
        <div class="__one">
          <p>Date Received</p>
          <input type="date" v-model="formData.dateReceived" />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Date Sampled</p>
          <input type="date" v-model="formData.dateSampled" />
        </div>
        <div class="__one">
          <p>Report Number</p>
          <input
            type="text"
            v-model="formData.reportNo"
            placeholder="Report Number"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Specific Gravity @ 15&deg;C</p>
          <input
            type="number"
            name="specific_gravity"
            placeholder="Specific Gravity @ 15°C"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>Viscosity @ 40&deg;C</p>
          <input
            type="number"
            placeholder="Visc @ 40°C"
            name="visco_40"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Viscosity @ 100&deg;C</p>
          <input
            type="number"
            placeholder="Visc @ 100°C"
            name="visco_100"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>CCS</p>
          <input
            type="number"
            name="ccs"
            placeholder="Ccs"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>MRV</p>
          <input
            type="number"
            name="mrv"
            placeholder="Mrv"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>Colour</p>
          <input
            type="text"
            name="colour"
            placeholder="Colour"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Aspect</p>
          <input
            type="text"
            name="aspect"
            placeholder="Aspect"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>Foaming @24&deg;C</p>
          <input
            type="text"
            name="foaming24"
            placeholder="Foaming @ 24°C"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Foaming @93&deg;C</p>
          <input
            type="number"
            name="foaming93"
            placeholder="Foaming @ 93°C"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>Foaming @24&deg;C after 93&deg;C</p>
          <input
            type="number"
            name="foaming24_after_93"
            placeholder="Foaming 24°C after 100°C"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Base Number(mgKOH/g)</p>
          <input
            type="number"
            name="base_number"
            placeholder="Base Number"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>Flash Point(&deg;C)</p>
          <input
            type="number"
            name="flash_point"
            placeholder="Flash Point"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Pour Point(&deg;C)</p>
          <input
            type="number"
            name="pour_point"
            placeholder="Pour Point"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>Noack Volatility after 1 hour @25&deg;C(%)</p>
          <input
            type="number"
            name="noack_volatility"
            placeholder="Noack Volatility"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Sulphated Ash(%m)</p>
          <input
            type="number"
            name="sulphated_ash "
            placeholder="Sulphated Ash"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>Ca</p>
          <input
            type="number"
            name="ca"
            placeholder="Ca"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one">
          <p>Zn</p>
          <input
            type="number"
            name="zn"
            placeholder="Zn"
            @input="analysisUpdate"
          />
        </div>
        <div class="__one">
          <p>P</p>
          <input
            type="number"
            name="p"
            placeholder="P"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1 mb-2">
        <div class="__one">
          <p>Mg</p>
          <input
            type="number"
            name="Mg"
            placeholder="Mg"
            @input="analysisUpdate"
          />
        </div>
      </div>
      <div class="__row1">
        <div class="__one __centered">
          <p>Viscosity Index</p>
          <div class="__output">
            <p>0</p>
          </div>
        </div>
      </div>
      <div class="__row1">
        <div class="__one __remark">
          <p>Remark</p>
          <Dropdown
            placeholder="Select Remark"
            v-model="formData.remark"
            :options="['Pass', 'Fail']"
          />
        </div>
      </div>
      <button class="__btn-add-base">Save</button>
    </form>
  </div>
</template>

<script src="./blend.js"></script>
