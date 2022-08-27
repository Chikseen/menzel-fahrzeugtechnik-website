<template>
  <div>
    <h1>Klimaanlagenservice</h1>
    <div class="serviceView_detailed_text">
      <ul>
        <li>
          Die regelmäßige Wartung der Klimaanlage erhöht die Sicherheit und verhindert teure Reparaturen. Jede
          Klimaanlage verliert pro Jahr Kältemittel,
          dadurch verringert sich die Kühlleistung der Klimaanlage deutlich. Deshalb sollte das Kältemittel alle 2 Jahre
          aufgefüllt werden.
        </li>
        <li>
          Eine Klimaanlage kühlt nicht nur, sie hält bei optimaler Leistung auch die Innenraumluft trocken. Deshalb ist
          es auch wichtig im Herbst und Winter die
          Klimaanlage einzuschalten, denn es gilt: je trockener die Innenraumluft, desto weniger beschlagen die
          Scheiben.
        </li>
      </ul>
      <div class="serviceView_detailed_img_wrapper">
        <img class="serviceView_detailed_img" src="~/assets/images/clima_device.png"
          alt="Bild eines Kältemitteltauschgerätes">
      </div>
      <div>
        <h3>So funktioniert die Klimaanlage im Auto</h3>
        <p>
          Ein Gas, das man komprimiert, erwärmt sich. Umgekehrt kühlt es sich ab, wenn es sich wieder ausdehnt.
          <strong>Dieses Prinzip nutzen Klimaanlagen:</strong> Das enthaltene, gasförmige Kühlmittel wird vom Verdichter
          angesaugt und komprimiert. Durch den
          Druck wird das Gas erwärmt und anschließend in einem nachfolgenden Wärmetauscher abgekühlt. Hier geht es in
          einen flüssigen Zustand über. Ein Trockner
          filtert anschließend eventuell vorhandenes Wasser aus dem Kühlmittel. Dann gelangt das nun flüssige Kühlmittel
          zu einem Expansionsventil, von wo aus
          es dosiert in den Verdampfer abgegeben wird. Dadurch, dass das Kühlmittel hier nicht mehr unter Druck steht,
          geht es beim Durchlaufen des Verdampfers
          wieder in den gasförmigen Zustand über. Für diesen Wechsel des Aggregatzustands wird Wärme benötigt. Diese
          wird der Luft entzogen, die den Verdampfer
          anströmt. Dadurch ist die Luft, wenn sie den Verdampfer passiert hat, stark abgekühlt und gelangt über die
          Lüftungsdüsen in den Innenraum. Vom
          Verdichter wird die Kühlflüssigkeit (jetzt im gasförmigen Zustand) wieder angesaugt - und der Kreislauf
          beginnt von vorne.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ac",
  head() {
    return {
      title: "Klimaanlagenservice",
      meta: [
        {
          hid: 'description_ac',
          name: 'description',
          content: 'Die regelmäßige Wartung der Klimaanlage erhöht die Sicherheit und verhindert teure Reparaturen. Jede Klimaanlage verliert pro Jahr Kältemittel, dadurch verringert sich die Kühlleistung der Klimaanlage deutlich. Deshalb sollte das Kältemittel alle 2 Jahre aufgefüllt werden.'
        },
        {
          hid: 'keywords_ac',
          name: 'keywords',
          content: 'Klimaanlagenservice'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/service/ac'
        }
      ]
    }
  },
}
</script>
