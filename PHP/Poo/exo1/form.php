
    <?php
      class Form {
        public $action;
        public $text;
        public $select;
        public $button;
        public $value;
        public $textarea;

        public function create($action) {
          echo "form action="$action" method="post">";
        }
        public function text($text) {
          echo "<input type="$text">";
        }
        public function select($select) {
          echo "<select>$select</select>";
        }
        public function button($button, $value) {
          echo "<button type="$button">$value</button>";
        }
        public function textarea() {
          echo "<textarea></textarea>";
        }
        public function checkbox($checkbox,$value) {
          echo "<p> input type="checkbox">$value</input></p>";
        }
      }

     ?>
  </body>
</html>
