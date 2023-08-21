document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			passenger_count: 0,
			taxi_count: 0,
			departTaxi: 0,
			joinQueue() {
				this.passenger_count ++;
			},
			leaveQueue() {
				if (this.passenger_count > 0) {
					this.passenger_count--;
				}
			},
			joinTaxiQueue() {
				this.taxi_count++;
				
			},
			queueLength() {
				return passenger_count;
			},
			taxiQueueLength() {
				return taxi_count;
			},
			taxiDepart() {
				if (this.passenger_count >= 12 && this.taxi_count > 0) {
					this.passenger_count -= 12;
					this.taxi_count--;
					this.departTaxi += 1;
				}
			},
			version: 'no-api-1.0'
		}
	});

});



